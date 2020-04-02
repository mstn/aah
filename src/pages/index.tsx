import React from 'react';

import { useRouter } from 'next/router';

import CircularProgress from '@material-ui/core/CircularProgress';

import CompanySearchPage from '../components/CompanySearchPage';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const applyFilter = (companies, currentPage, search) => {
  const filteredCompanies = companies.filter( 
    company => company.address.startsWith(search)
  );

  return {
    companies: filteredCompanies.slice((currentPage-1)*10, (currentPage-1)*10 + 10),
    totalCount: filteredCompanies.length,
  }
}

// TODO refactor code, it is in common with pages/pages/[id].tsx
const Home = (props: any) => {
  const classes = useStyles();
  const router = useRouter();
  const search = router.query.search || '';
  
  const [state, setState] = React.useState(applyFilter(props.companies, props.currentPage, search));
  
  const setSearch = (keyword: string) => router.push('/?search=' + keyword);

  React.useEffect(() => {
    setState(applyFilter(props.companies, props.currentPage, search))
  }, [search]);

  // @ts-ignore
  if (global.window && global.window.location.search !== '' && search === '') {
    return <CircularProgress className={classes.progress} />
  }

  return (
    <CompanySearchPage {...state} onSearch={setSearch} keyword={search} currentPage={props.currentPage} />
  );
}

export async function getStaticProps() {
  let companies = require('../../mocks/companies.json');

  return {
    props: {
      companies,
      totalCount: companies.length,
      currentPage: 1
    }, 
  }
}

export default Home
