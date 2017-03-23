import assert from 'assert'
import compose from '../../package/compose'
import toLocaleString from '../../package/number/toLocaleString'

describe('A toLocaleString', () =>
  it('should always return 3.14', () =>
    compose(assert, x => x === '3.14', toLocaleString)(3.14)))
