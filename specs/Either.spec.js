import assert from 'assert'
import { Either, Right, Left, fromNullable } from '../src/Either'

const Id = x => ({
  fold: f => f(x),
})

Id.of = x => Id(x)

describe('A Either', () => {
  it('should not call the map function when created from nullable', () => {
    fromNullable(null)
      .map(() => assert(false))
      .map(() => assert(false))
      .map(() => assert(true))
  })

  it('should return x with code 200', () => {
    Either
      .fromNullable({ ok: true, code: 200, body: 'yay!' })
      .fold(x => x, x => assert.equal(x.code, 200))
  })

  it('should fold left', () => {
    Either
      .fromNullable(null)
      .fold(x => assert.equal(x, null), () => assert(false))
  })

  it('should chain to Id', () => {
    fromNullable('Simon')
      .chain(Id.of)
      .fold(x => assert.equal(x, 'Simon'))
  })

  it('should build right', () => {
    assert.equal(Right('Simon').inspect(), 'Right(Simon)')
  })

  it('should build left', () => {
    assert.equal(Left('Simon').inspect(), 'Left(Simon)')
  })
})
