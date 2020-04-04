import compose from 'ramda/src/compose';
import equals from 'ramda/src/equals';
import any from 'ramda/src/any';
import prop from 'ramda/src/prop';
import isNil from 'ramda/src/isNil';
import always from 'ramda/src/always';
import filter from 'ramda/src/filter';
import allPass from 'ramda/src/allPass';
import anyPass from 'ramda/src/anyPass';

const isLike = (a: string, b: string) => {
  const re = new RegExp(b, 'ig');
  return re.test(a);
}

const canDeliverIn = (location: string) => anyPass([
  compose(
    any(equals(location)),
    prop('deliveryPlaces'),
  ),
  always(isNil(location))
])


const hasNameLike = (keyword: string) => anyPass([
  always(isNil(keyword)),
  (value: any) => isLike(value.name, keyword)
]);

const isMatchingCompany = (keyword: string, location: string) => allPass([
  hasNameLike(keyword),
  canDeliverIn(location),
])

const getFilteredCompanies =  (keyword: string, location: string) => 
  filter(isMatchingCompany(keyword, location));

const applyFilter = (companies, currentPage, search, location = null) => {
  const runSearch = getFilteredCompanies(search, location);
  const filteredCompanies = runSearch(companies) as any[]

  return {
    companies: filteredCompanies.slice((currentPage-1)*10, (currentPage-1)*10 + 10),
    totalCount: filteredCompanies.length,
    currentPage,
  }
}

export default applyFilter;