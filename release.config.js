module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/Tripouille/github-actions-tests",
  Plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};