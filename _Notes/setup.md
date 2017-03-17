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

## Bower
    Angular 2 team is pushing their code using NPM rather than Bower, we won't be using it in our project.
    Because node_modules folder contains both dev tools and js library, we need add gulp task to copy
    js library to wwwroot/js folder
    .bowerrc
    {
        "json": "bower.json",
        "directory": "wwwroot/bower_components",
        "timeout": 120000,
        "registry": {
            "search": [
            "https://bower.herokuapp.com"
            ]
        }
    }
    bower.json
    {
        "name": "asp.netcore",
        "private": true,
        "dependencies": {
            "bootstrap": "3.3.7",
            "jquery-validation":"1.16.0",
            "jquery-validation-unobtrusive":"3.2.6"
        }
    }
    
     
## Gulp
    ### Install Gulp package
    Add dependency into package.json
    "devDependencies": {
        "gulp": "^3.9.1",
        "gulp-clean": "^0.3.2",
        "gulp-concat": "^2.6.0",
        "gulp-sourcemaps": "^1.6.0",
        "gulp-typescript": "^2.13.6",
        "gulp-uglify": "^2.0.0",
    }
    gulp-clean: This deletes the contents of the destination folders
    gulp-concat: This merges multiple files into one
    gulp-sourcemaps: This generates the Source Maps
    gulp-typescript: This compiles TypeScript files into JS
    gulp-uglify: This minifies JavaScript files
    
    ### Config gulp 
    Add Gulp config file gulpfile.js 
    In task "app", gulp-typescipt complies the ts file to js
