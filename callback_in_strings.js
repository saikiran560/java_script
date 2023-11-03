const Str = "hellooo";

function processArray(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

function stringfunc(x) {
  console.log(x);
}

processArray(Str, stringfunc);
