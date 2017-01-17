# ऊंचा Oncha Maybe
Maybe monad implmentation

## usage
``` bash
yarn add oncha.maybe
```

``` JavaScript
import Maybe from 'oncha.maybe'

// Maybe of a string
Maybe('Hello exalted one')
  .map(sentence => sentence.toUpperString())
  .map(sentence => `${sentence}!`)
  .fold(console.log)

// Maybe of nothing
Maybe(null)
  .map(sentence => sentence.toUpperString())
  .map(sentence => `${sentence}!`)
  .fold(() => console.log('Maybe received a null'), console.log)
```