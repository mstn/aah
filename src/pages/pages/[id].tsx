import React from 'react';

import { useRouter } from 'next/router';

import CompanySearchPage from '../../components/CompanySearchPage';

import { makeStyles } from '@material-ui/core/styles';

import applyFilter from '../../lib/applyFilter';
import getLocations from '../../lib/getLocations';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const getLocationFromLocalStorage = () => {
  return localStorage.getItem('location') || null;
}

const setLocationToLocalStorage = (location: string) => {
  if (location !== null) {
    localStorage.setItem('location', location);
  } else {
    localStorage.removeItem('location');
  }
}

const Page = (props: any) => {
  const classes = useStyles();
  const router = useRouter();
  const search = router.query.search || '';
  const locations = getLocations(props.companies);
  
  const [state, setState] = React.useState(applyFilter(props.companies, props.currentPage, search));
  const [location, setLocation] = React.useState(null);

  const setSearch = (keyword: string) => router.push(`${process.env.ASSET_PREFIX}/?search=` + keyword);

  // set location with previously stored value
  React.useEffect(() => {
    const item = getLocationFromLocalStorage();
    setLocation(item);
  }, []);

  React.useEffect(() => {
    setLocationToLocalStorage(location);
    setState(applyFilter(props.companies, props.currentPage, search, location))
  }, [search, location]);

  return (
    <CompanySearchPage 
      {...state} 
      onSearch={setSearch} 
      onLocationSelected={setLocation}
      keyword={search} 
      currentPage={props.currentPage} 
      locations={locations}
      location={location}
    />
  );
}


export async function getStaticPaths() {

  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);

  const totalCount = companies.length;
  const paths = [];
    
  for (let i=0; i<Math.ceil(totalCount/10); i++) {
    const pageId = i + 1;
    paths.push({ params: { id: '' + pageId} });
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
