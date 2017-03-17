import Id from 'id'

// isFunction :: Any -> Boolean
const isFunction = func => !!(func && func.constructor && func.call && func.apply);

// FrozenArray :: Array -> FrozenArray
const FrozenArray = array => Id(array || []).map(Object.freeze).chain(frozenArray => ({
  // head :: -> FrozenArray
  head: () => FrozenArray(frozenArray.slice(0, 1)),
  // tail :: -> FrozenArray
  tail: () => FrozenArray(frozenArray.slice(1)),
  // fold :: ƒ -> Array
  fold: f => isFunction(f) ? f(frozenArray) : frozenArray,
  // foldh :: ƒ -> Any
  foldh: f => isFunction(f) ? f(frozenArray.slice(0, 1)[0]) : frozenArray.slice(0, 1)[0],
  // nth :: Number -> Any
  nth: x => frozenArray[x],
  // concat :: FrozenArray -> FrozenArray
  concat: y => FrozenArray(frozenArray.concat(y)),
  // length :: -> Number
  length: () => frozenArray.length,
  // every :: ƒ -> Boolean
  every: f => frozenArray.every(f),
  // filter :: ƒ -> FrozenArray
  filter: f => FrozenArray(frozenArray.filter(f)),
  // includes :: Object -> Boolean
  includes: f => frozenArray.includes(f),
  // indexOf :: Object -> Number
  indexOf: f => frozenArray.indexOf(f),
  // inspect :: -> String
  inspect: () => `FrozenArray([${frozenArray}])`,
  // join :: ƒ -> String
  join: f => frozenArray.join(f),
  // lastIndexOf :: ƒ -> FrozenArray
  lastIndexOf: f => frozenArray.lastIndexOf(f),
  // map :: ƒ -> FrozenArray
  map: f => FrozenArray(frozenArray.map(f)),
  // reduce :: ƒ -> Any
  reduce: f => frozenArray.reduce(f),
  // reduceRight :: ƒ -> Any
  reduceRight: f => frozenArray.reduceRight(f),
  // reverse :: -> FrozenArray
  reverse: () => FrozenArray(frozenArray.reverse()),
  // slice :: Number -> (Number -> FrozenArray)
  slice: begin => end => FrozenArray(frozenArray.slice(begin, end)),
  // some :: ƒ -> Boolean
  some: f => frozenArray.some(f),
  // of :: Array -> FrozenArray
  of: array => FrozenArray(array),
}))

// Array -> FrozenArray
FrozenArray.of = array => FrozenArray(array);

export default FrozenArray
