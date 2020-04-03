const isGithubPages = !!process.env.GITHUB_PAGES;
const assetPrefix = isGithubPages ? '/aah' : '';

module.exports = {
  assetPrefix,
  env: {
    showAddCompanyForm: false,
    localDataFolder: 'mocks',
    ASSET_PREFIX: assetPrefix,
  },
}