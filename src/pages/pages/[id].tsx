import React from 'react';

import { useRouter } from 'next/router';

import CompanySearchPage from '../../components/CompanySearchPage';

const applyFilter = (companies, currentPage, search) => {
  const filteredCompanies = companies.filter( 
    company => company.address.startsWith(search)
  );

  return {
    companies: filteredCompanies.slice((currentPage-1)*10, (currentPage-1)*10 + 10),
    totalCount: filteredCompanies.length,
  }
}

const Page = (props: any) => {
  
  const router = useRouter();
  const search = router.query.search || '';

  const [state, setState] = React.useState(applyFilter(props.companies, props.currentPage, search));
  
  const setSearch = (keyword: string) => router.push('/?search=' + keyword);

  React.useEffect(() => {
    setState(applyFilter(props.companies, props.currentPage, search))
  }, [search]);

  return (
    <CompanySearchPage {...state} onSearch={setSearch} keyword={search} currentPage={props.currentPage} />
  );
}

export async function getStaticPaths() {

  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);

  const totalCount = companies.length;
  const paths = [];
    
  for (let i=0; i<Math.ceil(totalCount/10); i++) {
    const pageId = i + 1;
    paths.push(`/pages/${pageId}`);
  }

  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }) {
  const pageId = params.id;
  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);

  return {
    props: {
      companies,
      totalCount: companies.length,
      currentPage: parseInt(pageId)
    }, 
  }
}

export default Page
