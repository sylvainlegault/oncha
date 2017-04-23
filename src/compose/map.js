import compose from 'compose'

// map :: (a -> b) -> Functor -> Functor
const map = f => functor => functor.map(f)

// composeMap :: ... -> (Any -> Any)
export default (...args) => compose(map, compose(...args))
