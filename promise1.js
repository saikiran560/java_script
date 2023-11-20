const myPromise = new Promise((resolve, reject) => {
    
  
    // If the operation is successful
    resolve("Operation succeeded....!");
  
    // If the operation fails
    // reject("Operation failed!");
  });

  myPromise
  .then((result) => {
    console.log("Operation succeeded:", result);
  })
  .catch((error) => {
    console.error("Operation failed:", error);
  });
