# loosewebc-test

A testing project for vue-cli-plugin-loosewebc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## config & faq

### rm

- {
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^7.0.0-0"
}

### run build web components @csii/vx-mobile for loose load

```
npm run build:@csii/vx-mobile
```

for example:
```js
import {Button} from '@csii/vx-mobile'

import Button from '@csii/vx-mobile/components/button'
```
### run build web components @csii/vx-mobile/lib/x for loose load

```
npm run loosewebc
            or
npx vue-cli-service loosewebc (newest node v14+ supports)
```

for example:
```js
import Button from '@csii/vx-mobile/lib/button'
```

### copy to vue3beta_vuecli to use
```
sh cp-plugin-loosewebc-windows.sh
for windows

or

sh cp-plugin-loosewebc.sh
for linux
```


