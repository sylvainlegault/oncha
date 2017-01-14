import assert from 'assert'
import { Id } from '../Id'

console.log('A Id')

console.log('will map to uppercase')
Id('Simon')
  .map(x => x.toUpperCase())
  .fold(x => assert.equal(x, 'SIMON'))

console.log('of will return a new Id')
assert.equal(Id.of('Simon').inspect(), Id('Simon').inspect())

console.log('inspect will format a correct Id')
assert.equal(Id('Simon').inspect(), 'Id(Simon)')

console.log('Id done!')