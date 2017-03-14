## TypeScript
    npm install -g typescript
    npm install --save-dev typing

    Add tsconfig.json under root folder
    
## Add TypeScript config file tsconfig.json to root folder
TypeScript compiler tsc, which can run with the help of the tsconfig.json

create /tsconfig.json like:
    {
        "compileOnSave": false,
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "lib": [ "es2015", "dom" ],      // Most importent, need "typescript": "^2.2.1"
            "noImplicitAny": false,
            "moduleResolution": "node",
            "sourceRoot": "app",
            "outDir": "js"
        },
        "exclude": [
            "node_modules",
            "typings/main",
            "typings/main.d.ts"
        ]
    } 
    run $tsc -watch
    tsc will transfer /src/app/*.ts to /wwwroot/app/*.js
    All client side code should be saved under /wwwroot folder
    The typescript code does not run at client side directly, so we put it in /src folder

    In this project, we run gulp task "app" calling gp_typescript to compile .ts to .js
    
## Add NPM packages for Typing
    core-js NPM package, which is a JavaScript library providing a great set of polyfills for ES6

    typings NPM package, which is a TypeScript type definition manager retrieves type definitions from the
web.