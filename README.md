# Notes on javascript .js

## Select id/class
```Javascript
document.querySelector('#id')
documnet.querySelector('.class')
```

## es6 new features
* when concatinating two strings, instead of using 

```Javascript 
 "something " + variable
```
we can use 

```Javascript 
`something ${something}` 
```
## Data visualization with d3
```
<script src="https://d3js.org/d3.v6.min.js"></script>
```
1. d3 is a JavaScript object
2. `d3.select()` method select html tags
3. `append()` method apeends a html tag in a specific tag(selected)
4. `text()` method write text in a specific tag that is selected

## JSON

> JSON - JavaScript Object Notation
> 
>media type = application/json
>
>extension = .json

### fundamentals
Always starts and ends with curly brackets {}. name should be quoted("") in name/value

### Data Types

1. Number 
2. String (with quote)
3. Boolean 
4. Array
5. Object
6. null

### tools

<https://jsonlint.com/> - JSON validator


## AJAX
> AJAX - Asyncrhonous JavaScript And XML
### fundamentals
No refresh & can request, receive, send ***Data*** to a ***Server***. not a programming language - combination of technology within the browser ***XHR object*** + ***JavaScript*** to connect the request data and the Document Object Model(DOM)

