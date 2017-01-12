import assert from 'assert'
import { Just, Either, Right, Left, Maybe, fromNullable, FrozenArray } from './index'

console.log('hello lets test some stuff');

Just('Simon')
  .map(x => x.toUpperCase())
  .fold(x => assert.equal(x, 'SIMON'))

Right('Simon')
  .map(x => x.toUpperCase())
  .fold(x => assert(false), x => assert.equal(x, 'SIMON'))

Left('Simon')
  .map(x => x.toUpperCase())
  .fold(x => assert(true), x => assert(false))

fromNullable(null)
  .map(x => assert(false))
  .map(x => assert(false))
  .map(x => assert(true))

fromNullable('Simon')
  .map(x => x)
  .map(x => x)
  .map(x => x)
  .map(x => assert.equal(x, 'Simon'))

Either
  .fromNullable({ ok: true, code: 200, body: 'yay!' })
  .fold(x => x, x => assert.equal(x.code, 200));

Either
  .fromNullable(null)
  .fold(x => assert.equal(x, null), x => assert(false));

fromNullable('Simon')
  .chain(Just.of)
  .fold(x => assert.equal(x, 'Simon'))

assert.equal(Just.of('Simon').inspect(), Just('Simon').inspect())
assert.notEqual(Just.of('Simon').inspect(), Maybe('Simon').inspect())

assert.equal(Just('Simon').inspect(), 'Just(Simon)')
assert.equal(Right('Simon').inspect(), 'Right(Simon)')
assert.equal(Left('Simon').inspect(), 'Left(Simon)')
assert.equal(Maybe('Simon').inspect(), 'Maybe(Simon)')

const frozenArray = FrozenArray([1, 2, 3])

const head = frozenArray.head()

assert.equal(head.length, 1)
assert.equal(head.fold(x => x), 1)

const tail = frozenArray.tail();

assert.equal(Array.isArray(tail), false)
assert.equal(tail.length, 2)
assert.equal(tail.fold(), 2)
assert.equal(tail.nth(1), 3)

assert.equal(frozenArray.length, 3)
assert.equal(frozenArray.fold(x => x * 2), 2)

assert.equal(FrozenArray.of([1, 2, 3]).every(x => x < 4), true)
assert.equal(FrozenArray.of([1, 2, 3]).filter(x => x < 2).length, 1)
assert.equal(FrozenArray.of([1, 2, 3]).includes(2), true)
assert.equal(FrozenArray.of([1, 2, 3]).indexOf(2), 1)
assert.equal(FrozenArray.of([1, 2, 3, 3, 3, 3]).lastIndexOf(3), 5)
assert.equal(FrozenArray.of([1, 2, 3]).inspect(), 'FrozenArray([1,2,3])')
assert.equal(FrozenArray.of([1, 2, 3]).join(), '1,2,3')
assert.equal(FrozenArray.of([1, 2, 3]).map(x => x * 2).inspect(), 'FrozenArray([2,4,6])')
assert.equal(FrozenArray.of([1, 2, 3]).some(x => x === 3), true)
assert.equal(FrozenArray.of([1, 2, 3]).slice(0)(1).inspect(), 'FrozenArray([1])')

assert.equal(frozenArray.concat([5]).length, 4)

console.log('whoah! all tests are done.')
