<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll learn how to unit test JavaScript files by using Jest. Jest is a unit testing framework that was developed by Facebook.

## Step 1

### Summary

In this step, we'll initialize a `package.json` and import Jest into our project.

### Instructions

* Run `npm init -y`.
  * This creates a `package.json` with all the default values.
* Run `npm install --save-dev jest` to install Jest and save it to the development dependencies. 

### Solution

<details>

<summary> <code> package.json </code> </summary>

```

```

</details>

## Step 2

### Summary

In this step, create a JavaScript file that has a couple functions.

### Instructions

* Create a `functions.js` file.
* Use `module.exports` to export an object.
* Add a new property to the object called `returnTwo`:
  * `returnTwo` should be a function that returns the integer `2`.
* Add a new property to the object called `greeting`:
  * `greeting` should be a function with a `name` parameter.
  * `greeting` should return `"Hello, name."` where `name` is the value of the `name` parameter.
* Add a new property to the object called `add`:
  * `add` should be a function with a `num1` and `num2` parameter.
  * `add` should return the sum of `num1` and `num2`.

### Solution

<details>

<summary> <code> functions.js </code> </summary>

```js
module.exports = {
  returnTwo: function() {
    return 2;
  },
  
  greeting: function( name ) {
    return `Hello, ${ name }.`;
  },

  add: function( num1, num2 ) {
    return num1 + num2;
  }
};
```

</details>



