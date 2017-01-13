import assert from 'assert'
import { Just } from '../Just'

console.log('A Just')

console.log('will map to uppercase')
Just('Simon')
  .map(x => x.toUpperCase())
  .fold(x => assert.equal(x, 'SIMON'))

console.log('of will return a new Just')
assert.equal(Just.of('Simon').inspect(), Just('Simon').inspect())

console.log('inspect will format a correct just')
assert.equal(Just('Simon').inspect(), 'Just(Simon)')

console.log('Just done!')