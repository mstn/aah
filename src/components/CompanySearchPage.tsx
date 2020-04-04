import React from 'react';

import Link from 'next/link';

import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import CompanyList from '../components/CompanyList';
import SearchBox from '../components/SearchBox';


const CompanySearchPage = (props: any) => {
  const { 
    totalCount, 
    companies, 
    currentPage, 
    onSearch, 
    onLocationSelected,
    keyword, 
    isLoading, 
    locations,
    location,
  } = props;
  
  return (
    <React.Fragment>
      <SearchBox 
        value={keyword} 
        location={location}
        onSearch={onSearch} 
        onLocationSelected={onLocationSelected} 
        locations={locations} 
      />
      <CompanyList data={companies} loading={isLoading} />
      {!isLoading && <Pagination 
        page={currentPage} 
        hideNextButton
        hidePrevButton
        count={Math.ceil(totalCount/10)}
        renderItem={ (item: any) => {
          if (item.type !== 'page') {
            return <PaginationItem {...item}></PaginationItem>
          }
          return (
            <Link href={`/pages/${item.page}?search=${keyword}`} as={`${process.env.ASSET_PREFIX}/pages/${item.page}?search=${keyword}`} passHref>
              <PaginationItem {...item}></PaginationItem>
            </Link>
          );
        }}
      />}
    </React.Fragment>
  );
}


export default CompanySearchPage;