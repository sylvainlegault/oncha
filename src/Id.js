// Id :: Any -> Id
const Id = x => ({
  // chain :: ƒ -> Monad
  chain: f => f(x),
  // map :: ƒ -> Id
  map: f => Id(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // inspect :: Nothing -> String
  inspect: () => `Id(${x})`
})

// of :: Any -> Id
Id.of = x => Id(x)

export default Id
