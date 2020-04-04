import React from 'react';

import CompanySearchPage from '../../components/CompanySearchPage';

import applyFilter from '../../lib/applyFilter';
import getLocations from '../../lib/getLocations';

const qs = require('query-string');

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

// from https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f
export const getQueryStringValue = (key: string, queryString = window.location.search) => { 
  const values = qs.parse(queryString); 
  return values[key];
};

// from https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f
const setQueryStringValue = ( 
  key, 
  value, 
  queryString = window.location.search
) => {
  const values = qs.parse(queryString); 
  const newQsValue = qs.stringify({ ...values, [key]: value }); 
  // we need to reset the page number
  const newUrl = `${process.env.ASSET_PREFIX}/?${newQsValue}`;
  // set path without triggering reload
  window.history.pushState({ path: newUrl }, '', newUrl);
};


const Page = (props: any) => {
  // const search = router.query.search || '';
  const locations = getLocations(props.companies);
  
  const [search, setSearch] = React.useState({
    location: null,
    keyword: '',
    pristine: true,
    dirty: false,
  });

  const [state, setState] = React.useState(applyFilter(props.companies, props.currentPage, search));

  const setKeyword = (keyword: string) => setSearch({
    ...search,
    keyword,
    pristine: false,
    dirty: true,
  });

  const setLocation = (location: string) => setSearch({
    ...search,
    location,
    pristine: false,
    dirty: true
  });

  // set location with previously stored value
  React.useEffect(() => {
    const location = getLocationFromLocalStorage();
    const keyword = getQueryStringValue('search') || '';
    setSearch({
      location,
      keyword,
      pristine: location === null && keyword === '',
      dirty: false,
    });
  }, []);

  React.useEffect(() => {
    const { keyword, location, pristine, dirty } = search;
    // if search has not changed, do nothing
    // the result is equal to the pre-rendered page
    if (pristine) {
      return;
    }
    setQueryStringValue('search', keyword)
    setLocationToLocalStorage(search.location);
    // set initial page only if we did search
    setState(applyFilter(props.companies, dirty ? 1 : props.currentPage, keyword, location))
  }, [search]);

  return (
    <CompanySearchPage 
      {...state} 
      onSearch={setKeyword} 
      onLocationSelected={setLocation}
      keyword={search.keyword} 
      locations={locations}
      location={search.location}
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
