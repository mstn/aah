import { gql } from 'apollo-boost';

import CompanyProfile from '../../components/Company';
import initApolloClient from '../../lib/apolloClient';

const Company = ({ company }) => {
  return <CompanyProfile {...company} />
}

const client = initApolloClient();

const GET_COMPANIES = gql`
  query getCompanies($search: CompanySearchInput, $offset: Int, $limit: Int) {
    getCompanies(search: $search, offset: $offset, limit: $limit) {
      totalCount
      data {
        id
      }
    }
  }
`;

const GET_COMPANY = gql`
  query getCompany($companyId: ID!) {
    getCompany(companyId: $companyId) {
      id
      kind
      name
      address
      phone
      email
      notes
      isLocalDeliveryAvailable
    }
  }
`;

// Company page is pre-rendered at compile time for SEO
// see https://nextjs.org/docs/basic-features/pages

export async function getStaticPaths() {
  let paths = [];
  // Call an external API endpoint to get companies
  try {
    const query = await client.query({
      query: GET_COMPANIES,
      variables: {
        search: {},
        offset: 0,
        limit: 100000, // TOFIX
      }
    });
    // TODO check errors
    // Get the paths we want to pre-render based on companies
    paths = query.data.getCompanies.data.map(company => `/companies/${company.id}`)
  } catch (e) {
    console.error('Cannot call GraphQL server %j', e);
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const companyId = params.id;
  let company = {};

  try {
    const query = await client.query({
      query: GET_COMPANY,
      variables: {
        companyId,
      }
    });

    // TODO check errors
    company = query.data.getCompany;

  } catch (e) {
    console.error('Cannot call GraphQL server %j', e);
  }
  
  // Pass post data to the page via props
  return { props: { company } }
}

export default Company