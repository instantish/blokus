/* eslint-disable @typescript-eslint/no-var-requires */
const { lint } = require('type-coverage-core');
const core = require('@actions/core');
const fetch = require('node-fetch');

const branch = process.env.GITHUB_BRANCH;
const mainBranch = process.env.GITHUB_MAIN_BRANCH;
const jsonBinId = process.env.JSON_BIN_ID;
const jsonBinKey = process.env.JSON_SECRET_KEY;

const generateCoverage = async () => {
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

  const result = await fetch(`https://api.jsonbin.io/b/${jsonBinId}`, {
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

  core.setOutput('status', change >= 0 ? 'success' : 'failure');
  core.setOutput(
    'message',
    `TypeScript coverage: ${percentage}. Change since last merge: ${change >= 0 ? `+${change}` : change}`
  );
};

generateCoverage();
