// Define an object with callback functions
const mathOperations = {
    add: function (a, b, callback) {
      const result = a + b;
      callback(result);
    },
    subtract: function (a, b, callback) {
      const result = a - b;
      callback(result);
    },
    multiply: function (a, b, callback) {
      const result = a * b;
      callback(result);
    },
    divide: function (a, b, callback) {
      if (b === 0) {
        callback("Cannot divide by zero");
      } else {
        const result = a / b;
        callback(result);
      }
    },
  };
  
  // Define a callback function to handle the result
  function handleResult(result) {
    console.log("Result:", result);
  }
  
  // Perform math operations using the object's callback functions
  mathOperations.add(5, 3, handleResult);
  mathOperations.subtract(10, 4, handleResult);
  mathOperations.multiply(6, 7, handleResult);
  mathOperations.divide(8, 2, handleResult);
  