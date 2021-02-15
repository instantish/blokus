/* eslint-disable @typescript-eslint/no-var-requires */
const { lint } = require('type-coverage-core');
const { generate: generateJSON } = require('typescript-coverage-report/dist/lib/reporters/json');
const core = require('@actions/core');
const artifact = require('@actions/artifact');
const fs = require('fs');

const artifactClient = artifact.create();

const branch = process.env.GITHUB_BRANCH;
const mainBranch = process.env.GITHUB_MAIN_BRANCH;

const generateCoverage = async () => {
  const { anys, fileCounts, totalCount, correctCount } = await lint('.', {
    fileCounts: true,
    ignoreFiles: ['scripts/*.js'],
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

  const artifactName = 'coverage-report';

  const path = './out';
  const options = {
    createArtifactFolder: true,
  };

  const downloadResponse = await artifactClient.downloadArtifact(artifactName, path, options);
  const rawdata = await fs.readFileSync(downloadResponse.downloadPath);
  const pastReport = JSON.parse(rawdata);

  const expected = pastReport.percentage || 0;

  if (branch === mainBranch) {
    await generateJSON(coverage, { threshold: expected, outputDir: './out' });

    const files = ['./out/typescript-coverage.json'];
    const rootDirectory = './out';
    const options = {
      continueOnError: true,
      retentionDays: 400,
    };

    await artifactClient.uploadArtifact(artifactName, files, rootDirectory, options);
  }

  const change = expected - percentage;

  core.setOutput('status', change >= 0 ? 'success' : 'failure');
  core.setOutput(
    'message',
    `TypeScript coverage: ${percentage}. Change since last merge: ${change >= 0 ? `+${change}` : change}`
  );
};

generateCoverage();
