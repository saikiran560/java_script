function greet(name, callback) {
    setTimeout(function(){
          
        console.log("Hello, " + name + "!");
    // Call the callback function after greeting
  callback() ;
    },5000);
  }
  
  function sayGoodbye() {
    
    console.log("Goodbye!");
      
  }
  
  // Call the greet function with a callback
  greet("Alice", sayGoodbye);