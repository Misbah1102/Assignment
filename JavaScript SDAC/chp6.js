//DOM Manupalation ByID

const a = document.getElementById("p1")             
a.innerHTML="misbah"

// DOM Manupalation By ClassName

const b = document.getElementsByClassName("ab")[0].innerHTML
alert(b);

// DOM manupulation By TagName

const c=document.getElementsByTagName("h1")
c[0].style.color="blue";


// DOM manupulation By QuerySelector

const d= document.querySelector(".ba")
d.style.color="red";

// DOM manupulation By querySelectorALL

const e = document.querySelectorAll(".baa")

for(let i=0; i<=c.length; i++){
    e[i].innerHTML="change";
}


