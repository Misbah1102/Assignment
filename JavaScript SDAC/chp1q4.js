// chp1q4

for(var i=1;i<5;i++){ //global
console.log(i)
}
console.log("after loop ends" )
console.log(i)


for(let i=1;i<5;i++){ //blockscope .. local
    console.log(i)
    }
    console.log("after loop ends" )
    console.log(i)   //will give error ..Undefined i