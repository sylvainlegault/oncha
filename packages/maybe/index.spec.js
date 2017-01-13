import assert from 'assert'
import Maybe from './index'

console.log('A Maybe')

console.log('inspect will return a formatted maybe')
assert.equal(Maybe('Simon').inspect(), 'Maybe(Simon)')

console.log(' else is ignored');
Maybe('Simon')
  .map(x => x.toUpperCase())
  .else(() => 'null value')
  .fold(x => assert.equal(x, 'SIMON'))

console.log(' else is executed');
Maybe()
  .map(x => x.toUpperCase())
  .else(() => 'null value')
  .map(x => x.toUpperCase())
  .fold(x => assert.equal(x, 'NULL VALUE'))

console.log('Maybe done!')