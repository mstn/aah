import CompanyProfile from '../../components/Company';

const Company = ({ company }) => {
  return <CompanyProfile {...company} />
}

// Company page is pre-rendered at compile time for SEO
// see https://nextjs.org/docs/basic-features/pages

export async function getStaticPaths() {
  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);
  let paths = companies.map(company => `/companies/${company.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);
  const companyId = params.id;
  let company = companies.find(company => company.id === companyId);

  // Pass post data to the page via props
  return { props: { company } }
}

export default Company