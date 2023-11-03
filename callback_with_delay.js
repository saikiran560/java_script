function delayedGreeting(name, delay, callback) {
    setTimeout(function() {
      console.log("Hello, " + name + "!");
      callback();
    }, delay);
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  delayedGreeting("kiran", 2000, sayGoodbye);
  