## What does this do

MLGProxy is a proxy that allows you to pretend to have mlg code. For example **m8** becomes **mate**

| Original      | Gets replaced with |
|---------------|--------------------|
| 0             | o                  |
| 3             | e                  |
| 4             | a                  |
| 8             | ate                |
| LO+L or RE+KT | Nothing            |

## Setup

`npm install mlgproxy`

```js
const kewlobject = require("mlgproxy")({}, options);
```

## Usage

```js
//set a
kewlobject.LOOOOOOOOOOOOOOOOOOOOOOOOL4REEEEEKT = "hi";

//get a
console.log(kewlobject.a);
```

## Options

**Key must be valid regex**
```js
const options = {
  replace: {
    "1": "I",
  }
};
```
