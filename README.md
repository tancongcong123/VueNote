# vue2-test

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

###从git clone下来的项目
    1 执行 npm i ，引入插件

npm i axios
npm i vue-router@3
npm i vuex
npm i nanoid
npm i pubsub-js

1 npm run serve之后让浏览器自动打开
    package.json-->scripts-->serve中
        "scripts": {
            "serve": "vue-cli-service serve --open",
            "build": "vue-cli-service build",
            "lint": "vue-cli-service lint"
        },
