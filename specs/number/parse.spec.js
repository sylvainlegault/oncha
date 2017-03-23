import assert from 'assert'
import Id from '../../package/id'
import parse from '../../package/number/parse'

describe('A parse', () => {
  it('should always return 1', () =>
    Id(1).map(parse).map(a => a === 1).map(assert))

  it('should always return 0', () =>
    Id(0).map(parse).map(a => a === 0).map(assert))

  it('should always return 0', () =>
    Id('').map(parse).map(a => a === 0).map(assert))

  it('should always return 0', () =>
    Id().map(parse).map(a => a === 0).map(assert))

  it('should always return 0', () =>
    Id(null).map(parse).map(a => a === 0).map(assert))
})
