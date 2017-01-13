// Just :: Any -> Just
const Just = x => ({
  // chain :: ƒ -> Monad
  chain: f => f(x),
  // map :: ƒ -> Just
  map: f => Just(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // inspect :: Nothing -> String
  inspect: () => `Just(${x})`
})

// of :: Any -> Just
Just.of = x => Just(x)

export default Just