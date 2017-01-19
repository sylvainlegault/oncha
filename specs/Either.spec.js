import assert from 'assert'
import Either from '../src/Either'
const { Right, Left, fromNullable } = Either

const Id = x => ({
  fold: f => f(x),
})

Id.of = x => Id(x)

describe('A Either', () => {
  it('should not call the map function when created from nullable', () => {
    fromNullable(null)
      .map(x => assert(false))
      .map(x => assert(false))
      .map(x => assert(true))
  })
  it('should return x with code 200', () => {
    Either
      .fromNullable({ ok: true, code: 200, body: 'yay!' })
      .fold(x => x, x => assert.equal(x.code, 200))
  })
  it('should fold left', () => {
    Either
      .fromNullable(null)
      .fold(x => assert.equal(x, null), x => assert(false))
  })
  it('should not call the map function when created from nullable', () => {
    fromNullable('Simon')
      .chain(Id.of)
      .fold(x => assert.equal(x, 'Simon'))
  })
  it('should not call the map function when created from nullable', () => {
    assert.equal(Right('Simon').inspect(), 'Right(Simon)')
  })
  it('should not call the map function when created from nullable', () => {
    assert.equal(Left('Simon').inspect(), 'Left(Simon)')
  })
})
