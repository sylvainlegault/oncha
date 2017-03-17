import assert from 'assert'
import compose from '../../package/compose'
import toExponential from '../../package/number/toExponential'

describe('A parse', () => {
  it('shoud always return 1', () => compose(assert, a => a === "3e+0", toExponential)(3))
})
