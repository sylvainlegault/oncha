import compose from 'compose'
import map from 'array/map'

// composeMap :: ... -> (Any -> Any)
export default (...args) => compose(map, compose(...args))
