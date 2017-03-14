## Asp.net core
  PackageReference Include="Microsoft.AspNetCore" Version="1.1.1"
  PackageReference Include="Microsoft.AspNetCore.Mvc" Version="1.1.2"

  Add service configuration in Startup.cs
  
## Newtonsoft.Json
      PackageReference  "Newtonsoft.Json": "9.0.1"


## Node.Js
    install NVM (node version manager) and restart the terminal
    $ crul -o- https://.../install.sh | bash
    
    $ nvm ls-remote       # list all version of Node.js
    $ nvm install xxx.xx    # install node.js
    $ npm install -g npm    # install npm
    
    $ npm init    # generate package.json
    
## Yeoman
    $ npm install -g yo generator-aspnet 
    $ yo aspnet
    $ yo aspnet:MvcController Home
 
## TypeScript
    npm install -g typescript
    npm install --save-dev typing

    Add tsconfig.json under root folder
    
    
    create /tsconfig.json
    {
        "compilerOptions": {
            "target": "es5",
            "module": "commonjs",
            "inlineSourceMap": true,
            "inlineSources": true,
            "sourceRoot": "src/app",
            "outDir": "wwwroot/app"
        }
    }  
    run $tsc -watch
    tsc will transfer /src/app/*.ts to /wwwroot/app/*.js
    All client side code should be saved under /wwwroot folder
    The typescript code does not run at client side directly, so we put it in /src folder
     
## Gulp
    Add dependency into package.json
    "devDependencies": {
        "gulp": "^3.9.1",
        "gulp-clean": "^0.3.2",
        "gulp-concat": "^2.6.0",
        "gulp-sourcemaps": "^1.6.0",
        "gulp-typescript": "^2.13.6",
        "gulp-uglify": "^2.0.0",
    }
    
## Bower



## 