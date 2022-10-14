let st1= " function Up "
let x1= function trim(){
    console.log(st1.trim());

    return "done";

}
let x2 = function changeToLowerCase(){
    console.log(st1.toLowerCase());
    return "done";
}
let x3 = function changeToUpperCase(){
    console.log(st1.toUpperCase());
    return "done"
}
module.exports.trim= x1; 
module.exports.LowerCase= x2;
module.exports.UpperCase= x3;