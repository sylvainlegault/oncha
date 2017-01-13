import assert from 'assert'
import { Maybe } from '../Maybe'

console.log('A Maybe');

console.log('inspect will return a formatted maybe');
assert.equal(Maybe('Simon').inspect(), 'Maybe(Simon)')

console.log('Maybe done!')