import React from 'react';

import { gql } from 'apollo-boost';

import { useApolloClient } from '@apollo/react-hooks';

import { useRouter } from 'next/router';

import initApolloClient from '../lib/apolloClient';

import CompanySearchPage from '../components/CompanySearchPage';

const GET_COMPANIES = gql`
  query getCompanies($search: CompanySearchInput, $offset: Int, $limit: Int) {
    getCompanies(search: $search, offset: $offset, limit: $limit) {
      totalCount
      data {
        id
        name
        address
      }
    }
  }
`;

// TODO refactor code, it is in common with pages/pages/[id].tsx
const Home = (staticProps: any) => {

  const router = useRouter();
  const [state, setState] = React.useState({...staticProps });

  const client = useApolloClient();
  
  const setSearch = (keyword: string) => router.push('/?search=' + keyword);

  const search = router.query.search || '';

  React.useEffect(() => {
    client.query({
      query: GET_COMPANIES,
      variables: {
        search: { keyword: search },
        offset: 0,
        limit: 10,
      }
    }).then(result => {
      setState({
        ...state,
        totalCount: result.data.getCompanies.totalCount,
        companies: result.data.getCompanies.data
      })
    })
  }, [search])

  return (
    <CompanySearchPage {...state} onSearch={setSearch} keyword={search} currentPage={1} />
  );
}


const client = initApolloClient();

export async function getServerSideProps({ query }) {
  const pageId = 0;
  let totalCount = 0;
  let companies = [];

  try {
    const result = await client.query({
      query: GET_COMPANIES,
      variables: {
        search: { keyword: query.search },
        offset: 0,
        limit: 10,
      }
    });
    // TODO check errors
    
    totalCount = result.data.getCompanies.totalCount;
    companies = result.data.getCompanies.data;

  } catch (e) {
    console.error('Cannot call GraphQL server %j', e);
  }
  // Pass post data to the page via props
  return { props: { companies, totalCount, currentPage: pageId } }
}


export default Home
