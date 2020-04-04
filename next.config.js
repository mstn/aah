const isGithubPages = !!process.env.GITHUB_PAGES;
const assetPrefix = isGithubPages ? '/aah' : '';

module.exports = {
  assetPrefix,
  env: {
    showAddCompanyForm: false,
    localDataFolder: 'mocks',
    ASSET_PREFIX: assetPrefix,
  },
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/favorites': { page: '/favorites' }
    };
    const localDataFolder = 'mocks';
    let companies = require(`./${localDataFolder}/companies.json`);

    companies.forEach(company => {
      paths[`/companies/${company.id}`] = { page: '/companies/[id]', query: { id: company.id } };
    });

    for (let i=0; i<Math.ceil(companies.length/10); i++) {
      const pageId = i + 1;
      paths[`/pages/${pageId}`] = { page: '/pages/[id]', query: { id: pageId } };
    }

    return paths;
  }
}