import assert from 'assert'
import compose from '../../package/compose'
import toExponential from '../../package/number/toExponential'

describe('A toExponential', () => {
  it('shoud always return 3e+0', () =>
    compose(assert, a => a === '3e+0', toExponential)(3))
})
