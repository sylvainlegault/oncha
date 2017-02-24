import compose from 'compose'
import map from 'map'

// composeMap :: ... -> (Any -> Any)
export default (...args) => compose(map, compose(...args))
