import assert from 'assert'
import compose from '../../package/compose'
import toFixed from '../../package/number/toFixed'

describe('A toFixed', () =>
  it('should always return 3', () =>
    compose(assert, x => x === '3', toFixed)(3.14)))
