import { default as Home } from './pages/[id]';

export async function getStaticProps() {
  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../${localDataFolder}/companies.json`);

  return {
    props: {
      companies,
      totalCount: companies.length,
      currentPage: 1
    }, 
  }
}

export default Home
