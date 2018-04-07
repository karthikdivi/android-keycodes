# android-keycodes
Converts keyboard keycodes to Android keycodes

## Installation

#### npm

```sh
$ npm install android-keycodes
```


## API

```javascript
var androidKeycodes = require('android-keycodes');

androidKeycodes('A') // returns 29
androidKeycodes('0') // returns 7

androidKeycodes('HOME') // returns 3
androidKeycodes('BACK') // returns 4
androidKeycodes('A') // returns 29

androidKeycodes('ENTER') // returns 66
androidKeycodes('Enter') // returns 66

androidKeycodes('Foo') // returns undefined

```
