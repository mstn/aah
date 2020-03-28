import React from 'react';

import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import CompanyList from '../components/CompanyList';
import SearchBox from '../components/SearchBox';
import { Link } from '@material-ui/core';

const CompanySearchPage = (props: any) => {
  const { totalCount, companies, currentPage, onSearch, keyword, isLoading } = props;

  return (
    <React.Fragment>
      <SearchBox value={keyword} onSearch={onSearch}/>
      <CompanyList data={companies} loading={isLoading} />
      {!isLoading && <Pagination 
        page={currentPage} 
        count={Math.ceil(totalCount/10)}
        renderItem={ (item: any) => {
          if (item.type !== 'page') {
            return <PaginationItem {...item}></PaginationItem>
          }
          return (
            <Link href={`/pages/${item.page}?search=${keyword}`}>
              <PaginationItem {...item}></PaginationItem>
            </Link>
          );
        }}
      />}
    </React.Fragment>
  );
}


export default CompanySearchPage;