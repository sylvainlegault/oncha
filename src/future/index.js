// ƒ -> ƒ
const fork = action => (error, success) => action(error, success)

// chain :: ƒ -> (ƒ -> Future)
const chain = action =>
  func =>
    Future((reject, resolve) =>
      fork(action)(e => reject(e), data => func(data).fork(reject, resolve)))

// Future :: ƒ -> Future
const Future = action => ({
  map: func => chain(action)(x => Future.of(func(x))),
  chain: chain(action),
  fork: fork(action),
})

// Any -> Future
Future.of = x => Future((reject, resolve) => resolve(x))

export default Future
