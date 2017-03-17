import compose from 'compose'
import parse from 'number/parse'

// toFixed :: Number -> Number
export default compose(number => number.toPrecision(), parse)
