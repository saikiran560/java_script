async function fetchData() {
    return new Promise((resolve, reject) => {
      
        const success = true; // Change to false to simulate an error
        if (success) {
          resolve('Data fetched!');
        } else {
          reject('Error fetching data!');
        }
      
    });
  }
  
  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();