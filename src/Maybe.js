// Maybe :: Any -> Maybe
const Maybe = x => ({
  // chain :: ƒ -> Maybe | Any
  chain: f => isNull(x) ? Maybe(x) : f(x),
  // map :: ƒ -> Maybe
  map: f => isNull(x) ? Maybe(x) : Maybe(f(x)),
  // fold :: ƒ -> Any
  fold: f => f(x),
  // else :: ƒ -> Maybe
  else: f => isNull(x) ? Maybe(f()) : Maybe(x),
  // inspect :: Nothing -> String
  inspect: () => `Maybe(${x})`
})

// Any -> Maybe
Maybe.of = x => Maybe(x)

export default Maybe