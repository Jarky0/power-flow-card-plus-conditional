module.exports = {
  branches: ["main", { name: "dev", prerelease: true }],
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: ["dist/power-flow-card-plus-conditional.js"],
            from: /Power Flow Card Plus Conditional v(\d+\.\d+\.\d+)/,
            to: "Power Flow Card Plus Conditional v${nextRelease.version}",
            results: [
              {
                file: "dist/power-flow-card-plus-conditional.js",
                hasChanged: true,
                numMatches: 2,
                numReplacements: 2,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "README.md", "package.json"],
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "dist/*.js",
      },
    ],
  ],
};
