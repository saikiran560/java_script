const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation 
      setTimeout(() => {
        const data = { name: "kiran", age: 26 };
        resolve(data);
        // Uncomment the line below to simulate an error
        // reject("Failed to fetch data");
      }, 1000);
    });
  };
  
  // Using the Promise to fetch data
  fetchData()
    .then((data) => {
      console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  