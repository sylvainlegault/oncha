import assert from 'assert'
import Id from '../../package/id'
import concat from '../../package/string/concat'

describe('A concat', () =>
  it('should combine arrays', () =>
    Id('hello')
      .map(b => concat(b, ' world'))
      .map(a => a === 'hello world')
      .map(assert)))
