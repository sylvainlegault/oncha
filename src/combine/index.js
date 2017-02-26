import safe from 'safe'
import assign from 'object/assign'

// combineReducer :: (Object, Object) -> Object
const combineReducer = (acc, item) => assign(acc, item)

// combine :: [Object] -> Object
export default safe(list => list.reduce(combineReducer, {}))
