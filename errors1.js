function divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
  
  try {
    console.log(divide(10, 2)); // Outputs: 5
    console.log(divide(10, 0)); // Throws an error
  } catch (error) {
    console.error("Error:", error.message);
  }
  