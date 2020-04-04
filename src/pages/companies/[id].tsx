import React from 'react';

import CompanyProfile from '../../components/Company';

const getCompanyFromLocalStorage = (companyId) => {
  let favorites = {};
  const data = localStorage.getItem('companies');
  if (data) {
    try {
      favorites = JSON.parse(data);
    } catch(e) {
      console.error('currupted local storage: it should contain a json');
    }
  }
  return favorites[companyId] || {};
}

const Company = ({ company }) => {
  const [isFavorite, setFavorite] = React.useState(false);
  const handleToggleFavorite = () => setFavorite(!isFavorite);
  React.useEffect(() => {
    const item = getCompanyFromLocalStorage(company.id);
    setFavorite(item.isFavorite);
  }, [])
  React.useEffect(() => {
    let favorites = {};
    const data = localStorage.getItem('companies');
    if (data) {
      try {
        favorites = JSON.parse(data);
      } catch(e) {
        console.error('currupted local storage: it should contain a json');
      }
    }
    const currentItem = favorites[company.id] || company;
    currentItem['isFavorite'] = isFavorite;
    favorites[company.id] = currentItem;
    localStorage.setItem('companies', JSON.stringify(favorites));
  }, [isFavorite])
  return <CompanyProfile company={company} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
}

// Company page is pre-rendered at compile time for SEO
// see https://nextjs.org/docs/basic-features/pages

export async function getStaticPaths() {
  const localDataFolder = process.env.localDataFolder;
  let companies = require(`../../../${localDataFolder}/companies.json`);
  let paths = companies.map(company => ({ params: { id: ''+ company.id} }));

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