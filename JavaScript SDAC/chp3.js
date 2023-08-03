let a ="misbah memon"

//  for String length
let b = a.length;             
console.log(b);

// for character at index
console.log(a.charAt(2));

// concatenate 2 strings
let c= "hello"
let d= " lets meet"

let e = c.concat(d);
console.log(e)

// for getting index of the word

let f= d.indexOf("meet");
console.log(f);

// for undexing from end

let g=d.lastIndexOf(" lets")
console.log(g)


// converting string to lowercase

let h = "MISBAHMEMON"
let i=h.toLowerCase()
console.log(i)

// converting in uppercase

let j = "misbahmemon"
let k = j.toUpperCase()
console.log(k)


// slicing the string

let l = j.slice(5,9)
console.log(l)

// removing whitespaces from the string

let m ="      hey lets get a coffee                    "
let n = m.trim()
console.log(n)

// split the string

let o = "Sdac infotech"
let p = o.split(" ");
console.log(p)