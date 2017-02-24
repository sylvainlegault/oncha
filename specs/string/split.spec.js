import assert from 'assert'
import Id from '../../package/id'
import trim from '../../package/string/split'

describe('A split', () => {
  it('shoud be hello world', () =>
    Id('hello world')
      .map(trim(' '))
      .map(a => a[0] === 'hello')
      .map(assert))
})
