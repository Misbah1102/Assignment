function meth(){
    const a = 50/0;
}
function fu(){
    meth();
}
function p(){
    try{
        fu();
    }
    catch(e){
        console.log(e.name);
        console.log(e.message);
    }
}
p()