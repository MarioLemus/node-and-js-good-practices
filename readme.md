# This are some good practices followed for most Node.js and js developers

## Separate server from the app itself

- Separate concerns
- Easy to test
- Easy to adapt to different network conditions

### How to separate the files and what to add in them

- app.js -> everything related with your api (middlewares, routes)
- server.js -> everything related with the networks (hostname, ports, etc)

#### =============== JS PRACTICES ========================

## Set a correct js distribution

### order

-1 variables
-2 functions
-3 loops

## Always initializate variables to avoid UNDEFINED values, and know what datatype expects

## Declare objects and arrays with CONST

## Don't use any primitive datatype's class declaration

## Use parameter defaults, because IF YOU DON'T USE IT. IT CAN BREAK OUR CODE DUE TO IT RETURNING UNDEFINED

## Avoid eval()

## If objects are placed in the same line, PROPERTIES AND VALUES SHOULD BE COMPRESSED TOGETHER, AND A SPACE HAS TO BE PLACED BETWEEN PAIRS PROP. VALUE

## Lines should not be greater than 80 characters, the best place to break a line is when "," or "." is presented

## Don't create variables, IF YOUR NOT GOING TO SAVE VALUES IN IT
