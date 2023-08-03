// chp5q5

class CustomException extends Error{
    constructor(message) {
        super(message);
        this.name="Custom Exception";

    }
}

function meth(age){
    if(age==0){
        throw new CustomException("Age Cannot be zero")
    }
    else if(age<18){
        throw new CustomException("You are not eligible")
    }

}


try{
    meth(6);
}
catch(error){
    if(error.name=="CustomException"){
        console.error("Custom Exception: ${error.message}");

    }
    else{
        console.error("Unexpected error:", error)
    }
}
