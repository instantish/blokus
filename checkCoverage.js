/* eslint-disable @typescript-eslint/no-var-requires */
const cp = require('child_process');
const { lint } = require('type-coverage-core');
const core = require('@actions/core');
const fetch = require('node-fetch');

const githubToken = process.env.GITHUB_TOKEN;
const branch = process.env.GITHUB_BRANCH;
const mainBranch = process.env.GITHUB_MAIN_BRANCH;
const jsonBinId = process.env.JSON_BIN_ID;
const jsonBinKey = process.env.JSON_SECRET_KEY;

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

function getCurrentCommitSha() {
  return cp.execSync('git rev-parse HEAD').toString().trim();
}

// The SHA provided by GITHUB_SHA is the merge (PR) commit.
const sha = getCurrentCommitSha();

const setStatus = async (context, state, description) =>
  fetch(`https://api.github.com/repos/${owner}/${repo}/statuses/${sha}`, {
    method: 'POST',
    body: JSON.stringify({
      state,
      description,
      context,
    }),
    headers: {
      Authorization: `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
    },
  });

const generateCoverage = async () => {
  await setStatus('TypeScript coverage', 'pending', 'Running check..');

  const { anys, fileCounts, totalCount, correctCount } = await lint('.', {
    fileCounts: true,
  });
  const percentage = totalCount === 0 ? 100 : (correctCount * 100) / totalCount;

  const coverage = {
    fileCounts,
    anys,
    percentage,
    total: totalCount,
    covered: correctCount,
    uncovered: totalCount - correctCount,
  };

  const result = await fetch(`https://api.jsonbin.io/b/${jsonBinId}/latest`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'secret-key': jsonBinKey,
    },
  }).then(result => result.json());

  const expected = result.coverage.percentage || 0;

  if (branch === mainBranch) {
    await fetch(`https://api.jsonbin.io/b/${jsonBinId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'secret-key': jsonBinKey,
      },
      body: JSON.stringify({
        coverage,
      }),
    });
  }

  const change = percentage - expected;
  const status = change >= 0 ? 'success' : 'failure';
  const message = `TypeScript coverage: ${percentage}. Change since last merge: ${change >= 0 ? `+${change}` : change}`;

  await setStatus('TypeScript coverage', status, message);

  core.setOutput('status', status);
  core.setOutput('message', message);
};

generateCoverage();
