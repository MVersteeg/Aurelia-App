# Template App

I wanted to build an aurelia app from scratch and reuse it and this is the current result. 
I've opted for a basic project layout which is nice to navigate 
in webstorm. 

Views are compiled from JADE. 

ViewModels are transpiled using Babel

Bootstrap-SASS styling is compiled, autoprefixed and copied into the dist folder for use. 

## Todo

* proxy to express
* add api route

## Usage

Requirements: node.js + npm +  jspm

run

```
npm install 
jspm install 
gulp watch 
```

navigate to localhost:3000
