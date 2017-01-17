import assert from 'assert'
import FrozenArray from '../src/FrozenArray'

console.log('hello lets test some stuff')

const frozenArray = FrozenArray([1, 2, 3])

const head = frozenArray.head()

assert.equal(head.length, 1)
assert.equal(head.foldh(x => x), 1)

const tail = frozenArray.tail()

assert.equal(Array.isArray(tail), false)
assert.equal(tail.length, 2)
assert.equal(tail.foldh(), 2)
assert.equal(tail.nth(1), 3)

assert.equal(frozenArray.length, 3)
assert.equal(frozenArray.foldh(x => x * 2), 2)
assert.equal(frozenArray.inspect(), 'FrozenArray([1,2,3])')

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

console.log('FrozenArray done!')