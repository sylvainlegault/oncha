import assert from 'assert'
import Id from '../../package/id'
import parse from '../../package/string/parse'

describe('A parse', () => {
  it('shoud be hello world', () =>
    Id('hello world')
      .map(parse)
      .map(a => a === 'hello world')
      .map(assert))

  it('shoud be 1', () =>
    Id(1)
      .map(parse)
      .map(a => a === '1')
      .map(assert))

  it('shoud be empty', () =>
    Id()
      .map(parse)
      .map(a => a === '')
      .map(assert))
})
