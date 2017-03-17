import assert from 'assert'
import compose from '../../package/compose'
import toString from '../../package/number/toString'

describe('A toString', () =>
  it('shoud always return 3.14', () =>
    compose(assert, x => x === '3.14', toString)(3.14)))
