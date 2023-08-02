//chp2

const emp = {
    name: 'mishu',
    age: 20,
    sal: 35000,
    dept: {
        dep_id: 1101,
        dep_name: 'IT'
    }
}

//for retirving all keys
const key = Object.keys(emp)
console.log(key)


//for retirving all values

const value = Object.values(emp)
console.log(value)

//for retirving all keys and value

const kV= Object.entries(emp)
console.log(kV)

//for merging two objects

const a={a:'mishu',b:'hello'}
const b={c:'lets go'}

const merge=Object.assign(a,b)
console.log(merge)
