import assert from 'assert'
import compose from '../../package/compose'
import toPrecision from '../../package/number/toPrecision'

describe('A toPrecision', () =>
  it('should always return 3.14', () =>
    compose(assert, x => x === '3.14', toPrecision)(3.14)))
