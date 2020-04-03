import React from 'react';

import CompanyList from "../components/CompanyList";

const getFavCompaniesFromLocalStorage = () => {
  let favorites = {};
  const data = localStorage.getItem('companies');
  if (data) {
    try {
      favorites = JSON.parse(data);
    } catch(e) {
      console.error('currupted local storage: it should contain a json');
    }
  }
  return Object.values(favorites).filter( (company: any) => company.isFavorite === true)
}

const Favorites = () => {
  const [state, setState] = React.useState({ companies: [], loading: true });
  React.useEffect(() => {
    const companies = getFavCompaniesFromLocalStorage();
    setState({
      companies,
      loading: false,
    })
  }, []);
  
  return (
     <CompanyList data={state.companies} loading={state.loading}  />
  )
}

export default Favorites;