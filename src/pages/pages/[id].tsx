import React from 'react';

import { gql } from 'apollo-boost';

import { useApolloClient } from '@apollo/react-hooks';

import { useRouter } from 'next/router';

import initApolloClient from '../../lib/apolloClient';

import CompanySearchPage from '../../components/CompanySearchPage';

const client = initApolloClient();

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

const Page = (staticProps: any) => {
  const router = useRouter();

  const search = router.query.search || '';
  let isLoading = false;

  if ((global as any).window) {
    console.log(window.location.search)
    isLoading = window.location.search.startsWith('?search=')
    console.log(isLoading)
  }

  const [state, setState] = React.useState({...staticProps, isLoading });
  const client = useApolloClient();
  
  const setSearch = (keyword: string) => router.push('/?search=' + keyword);

  const currentPage = parseInt(router.query.id as string)

  React.useEffect(() => {
    client.query({
      query: GET_COMPANIES,
      variables: {
        search: { keyword: search },
        offset: (currentPage-1)*10,
        limit: 10,
      }
    }).then(result => {
      setState({
        ...state,
        isLoading: false,
        totalCount: result.data.getCompanies.totalCount,
        companies: result.data.getCompanies.data
      })
    })
  }, [search]);

  return (
    <CompanySearchPage {...state} onSearch={setSearch} keyword={search} currentPage={currentPage} />
  );
}

export async function getServerSideProps({ params, query }) {
  const pageId = parseInt(params.id);
  let totalCount = 0;
  let companies = [];

  try {
    const result = await client.query({
      query: GET_COMPANIES,
      variables: {
        search: { keyword: query.search },
        offset: (pageId-1)*10,
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

export default Page
