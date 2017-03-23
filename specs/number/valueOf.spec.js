import assert from 'assert'
import compose from '../../package/compose'
import valueOf from '../../package/number/valueOf'

describe('A valueOf', () =>
  it('should always return valueOf', () =>
    compose(assert, x => x === 3.14, valueOf)(3.14)))
