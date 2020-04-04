import reduce from 'ramda/src/reduce';
import map from 'ramda/src/map';
import compose from 'ramda/src/compose';
import concat from 'ramda/src/concat';
import uniq from 'ramda/src/uniq';


const getLocations = compose(
  uniq,
  reduce(concat, [] as any),
  map( (company: any) => company.deliveryPlaces )
)

export default getLocations;