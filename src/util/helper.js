let x1=function printDate(){
    console.log(14);
    return "done"
}
 let x2 = function printMonth(){
    console.log("october")
    return "done"
 }

 let x3= function getBatchInfo(){
    console.log(`batch name is :- lithium , week:-4 and 5th day, today we have learnt about nodejs ,some other npm packages and how can we export the content of any other module because by default it is private ,restricted in the same branch  `);
    return "done"
 }


 module.exports.date= x1;
 module.exports.month= x2;
 module.exports.batch= x3;