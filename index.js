// Any -> Boolean
const isFunction =
  func =>
    !!(func && func.constructor && func.call && func.apply)

// Any -> Boolean
const isNull =
  value =>
    value === null || value === undefined

// Any -> Just
export const Just = x => ({
  chain: f => f(x),
  map: f => Just(f(x)),
  fold: f => f(x),
  inspect: () => `Just(${x})`
})

// Any -> Just
Just.of = x => Just(x)

// Any -> Left|Right
export const fromNullable = x =>
  (isNull(x) ? Left : Right)(x)

// Any -> Right
export const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  fromNullable,
  inspect: () => `Right(${x})`
})

// Any -> Right
Right.of = x => Right(x)

// Any -> Left
export const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  fromNullable,
  inspect: () => `Left(${x})`
})

// Any -> Left
Left.of = x => Left(x)

// Either
export const Either = ({
  fromNullable,
  Left,
  Right,
})

// Any -> Maybe
export const Maybe = x => ({
  chain: f => isNull(x) ? Maybe(x) : f(x),
  map: f => isNull(x) ? Maybe(x) : Maybe(f(x)),
  fold: f => f(x),
  else: f => isNull(x) ? f(x) : Maybe(x),
  inspect: () => `Maybe(${x})`
})

// Any -> Maybe
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
      // fold :: f -> Any
      fold: f => isFunction(f) ? f(frozenArray.slice(0, 1)[0]) : frozenArray.slice(0, 1)[0],
      // nth :: Number -> Any
      nth: x => frozenArray[x],
      // concat :: List -> List
      concat: list => List(frozenArray.concat(list)),
      // length :: -> Number
      length: frozenArray.length,
      // every :: f -> Boolean
      every: f => frozenArray.every(f),
      // filter :: f -> List
      filter: f => List(frozenArray.filter(f)),
      // includes :: Object -> Boolean
      includes: f => frozenArray.includes(f),
      // indexOf :: Object -> Number
      indexOf: f => frozenArray.indexOf(f),
      // inspect :: f -> String
      inspect: () => `List([${frozenArray}])`,
      // join :: f -> String
      join: f => frozenArray.join(f),
      // lastIndexOf :: f -> List
      lastIndexOf: f => frozenArray.lastIndexOf(f),
      // map :: f -> List
      map: f => List(frozenArray.map(f)),
      // reduce :: f -> Any
      reduce: f => frozenArray.reduce(f),
      // reduceRight :: f -> Any
      reduceRight: f => frozenArray.reduceRight(f),
      // reverse :: -> List
      reverse: () => List(frozenArray.reverse()),
      // slice :: Number -> (Number -> List)
      slice: begin => end => List(frozenArray.slice(begin, end)),
      // some :: f -> Boolean
      some: f => frozenArray.some(f),
      // Array -> List
      of: array => List(array)
    }))

// Array -> List
List.of = array => List(array)