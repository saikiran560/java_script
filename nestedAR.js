//Nested array with simple example 


//creating nested array
let Nested_array =[[1,2,3],[4,5,6]];
console.log(Nested_array)

// accesing the elements of nested array using slice method
console.log("slicing : ",Nested_array.slice(0,2))

//pushing the elements to the nested array
Nested_array.push([7,8,9])
console.log("adding using push method :",Nested_array)

//deleting the last element of the nested array
Nested_array.pop()
console.log("using pop method :",Nested_array)

//deleting the perticula element of nested array using delete method, it follows the index 
delete(Nested_array[1])
console.log("deleting the perticular elements using delete method :",Nested_array)