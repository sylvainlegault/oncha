// compose :: f -> (ƒ -> (Any -> Any))
const compose =
  f =>
    g =>
      x => f(g(x))

// identity :: Any -> Any
const identity = a => a

// composition :: ƒ -> (ƒ -> ( -> Boolean))
export const composition =
  t =>
    eq =>
      () =>
        (y => eq(y.ap(y.ap(y.map(compose))), y.ap(y).ap(y)))(t.of(identity))
