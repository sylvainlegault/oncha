import assert from 'assert'
import Id from '../../package/id'
import trim from '../../package/string/trim'

describe('A split', () => {
  it('shoud be hello world', () =>
    Id('  hello world   ')
      .map(trim)
      .map(a => a === 'hello world')
      .map(assert))
})
