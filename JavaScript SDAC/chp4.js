// chp4

let ar =[10,20,30,40]
 

// for array length

let a = ar.length
console.log(a);

//for removing element from last position in array

let b = ar.pop();
console.log(b) //last element of array will pop
console.log(ar) // array without last element


// for inserting element at last in array

let c=ar.push(50);
console.log(c)  //index of  element inserted will show
console.log(ar) // array with inserted element will print


//for removing element from first position

let d = ar.shift()
console.log(d) // element removed will pop
console.log(ar) // array without first element will show

//for inserting element at first position in array

let e = ar.unshift(5)
console.log(ar) //array with element inserted will show


//convert elements of array in String
let f= ar.toString()
console.log(typeof(f));

//mapfunction .. use for traversing

const num=ar.map((ar)=>{
    return ar*2;
})
console.log(num);

// filter 

let arr=[1,2,3,4,5,6]
const even = arr.filter((arr)=>{
    return arr%2==0;
})
console.log(even);

//reduce .. will make the array in 1 value as per logic (add, sub, multiply, divide)

let t=0;
const sum=ar.reduce((ar,t)=>{
    return t=t+ar;
})
console.log(sum);