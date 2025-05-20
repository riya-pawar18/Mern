const ob1= {name:"Ravi",city:"Delhi",age:"20",
    fullAddress:function(){
        console.log("Function in object");
        return(2*2);
}};
const ob2= new Object();
const ob3= {};
console.log(ob1);
console.log(ob2);
console.log(ob3);
ob2.address= "ABES EC";
ob2.contact= "982345678";
console.log(ob2.address);
console.log(ob2["address"]);
delete ob1.age;
console.log(ob1);
console.log(ob1.fullAddress());