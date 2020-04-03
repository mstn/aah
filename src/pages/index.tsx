import React from 'react';

import { useRouter } from 'next/router';

import CompanySearchPage from '../components/CompanySearchPage';

import { makeStyles } from '@material-ui/core/styles';

import applyFilter from '../lib/applyFilter';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));


// TODO refactor code, it is in common with pages/pages/[id].tsx
const Home = (props: any) => {
  const classes = useStyles();
  const router = useRouter();
  const search = router.query.search || '';
  
  const [state, setState] = React.useState(applyFilter(props.companies, props.currentPage, search));
  
  const setSearch = (keyword: string) => router.push(`${process.env.ASSET_PREFIX}/?search=` + keyword);

  React.useEffect(() => {
    setState(applyFilter(props.companies, props.currentPage, search))
  }, [search]);

  return (
    <CompanySearchPage {...state} onSearch={setSearch} keyword={search} currentPage={props.currentPage} />
  );
}

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
