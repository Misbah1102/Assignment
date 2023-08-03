function validate(){
    const a = document.getElementById("name").value
    const b = document.getElementById("password").value
    
    
    if(a==""){
        alert("Please enter name")
    }
    if(b==""){
        alert("please enter a password")
    }
    if(b.length<6){
        alert("please enter password longer than 6 characters")
    }
}

