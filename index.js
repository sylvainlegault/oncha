// value -> Boolean
const isNull =
  value =>
    value === null || value === undefined

// x -> Just
export const Just = x => ({
  chain: f => f(x),
  map: f => Just(f(x)),
  fold: f => f(x),
  inspect: () => `Just(${x})`
})

// x -> Just
Just.of = x => Just(x)

// x -> Left|Right
export const fromNullable = x =>
  (isNull(x) ? Left : Right)(x)

// x -> Right
export const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  fromNullable,
  inspect: () => `Right(${x})`
})

// x -> Right
Right.of = x => Right(x)

// x -> Left
export const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  fromNullable,
  inspect: () => `Left(${x})`
})

// x -> Left
Left.of = x => Left(x)

// -> Either
export const Either = ({
  fromNullable,
  Left,
  Right,
})

// x -> Maybe
export const Maybe = x => ({
  chain: f => isNull(x) ? Maybe(x) : f(x),
  map: f => isNull(x) ? Maybe(x) : Maybe(f(x)),
  fold: f => f(x),
  else: f => isNull(x) ? f(x) : Maybe(x),
  inspect: () => `Maybe(${x})`
})

// x -> Maybe
Maybe.of = x => Maybe(x)

// Array -> List
export const List = array =>
  Just(array)
    .map(Object.freeze)
    .fold(frozenArray => ({
      // head :: -> List
      head: () => List(frozenArray.slice(0, 1)),
      // tail :: -> List
      tail: () => List(frozenArray.slice(1)),
      // fold :: f -> ?
      fold: f => isNull(f) ? frozenArray.slice(0, 1) : f(frozenArray.slice(0, 1)),
      // nth :: Number -> ?
      nth: x => frozenArray[x],
      // concat :: List -> List
      concat: list => List(frozenArray.concat(list)),
      // length :: -> Number
      length: frozenArray.length,
      // every :: f -> Boolean
      every: frozenArray.every,
      // filter :: f -> List
      filter: f => List(frozenArray.filter(f)),
      // includes :: Object -> Boolean
      includes: frozenArray.includes,
      // indexOf :: Object -> Number
      indexOf: frozenArray.indexOf,
      // inspect :: f -> String
      inspect: () => `List([${frozenArray}])`,
      // join :: f -> String
      join: frozenArray.join,
      // lastIndexOf :: f -> List
      lastIndexOf: frozenArray.lastIndexOf,
      // map :: f -> List
      map: f => List(frozenArray.map(f)),
      // reduce :: f -> ?
      reduce: frozenArray.reduce,
      // reduceRight :: f -> ?
      reduceRight: frozenArray.reduceRight,
      // reverse :: -> List
      reverse: () => List(frozenArray.reverse()),
      // slice :: Number -> (Number -> List)
      slice: begin => end => List(frozenArray.slice(begin, end)),
      // some :: f -> Boolean
      some: frozenArray.some,
      // Array -> List
      of: array => List(array)
    }))

// Array -> List
List.of = array => List(array)