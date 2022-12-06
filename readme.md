# This are some good practices followed for most Node.js and js developers

## Separate server from the app itself

- Separate concerns
- Easy to test
- Easy to adapt to different network conditions

### How to separate the files and what to add in them

- app.js > everything related with your api (middlewares, routes)
- server.js > everything related with the networks (hostname, ports, etc)

#### =============== JS PRACTICES ========================

## Set a correct js distribution

### order

- 1 variables
- 2 functions
- 3 loops

## Always initializate variables

- Help to avoid undefined values
- Get to know the datatype expected

## Declare objects and arrays with CONST

- Avoid overwriting them

## Don't use any primitive datatype's class declaration

- Is generally a bad practice

## Use parameter defaults

- Can break your code, because it can return undefined
- Get to know the datatype expected

## Avoid eval()

- Not used normally, but can cause security problems

## If objects are written in the same line

- Its properties and values should be compressed together
- A space has to be placed between pairs of properties and values

```JavaScript

  const car = {model:"corolla", brand:"toyota"}
```

## Lines of code should not be greater than 80 characters

- Avoid getting lose while reading code
- Avoid code getting wrap in wierd positions
- The best place to break a line is when "," or "." is presented

## Don't create variables, if you're not going to savevalues in them

- Avoid using memory inecesarilly
