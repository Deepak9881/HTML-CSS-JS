let x=6;
let count=0;

for(let i=1;i<=x;i++){
    if(x%i==0){
        count++
    }
}
if(count==2){
    console.log("the no is prime")
}else{
    console.log("not prime")
}



let s1= new String("1")
let y = 1

if( s1 === y)
   console.log("same")
else
   console.log("different")


   let s4="brave";

   let s2 = new String("brave");
   let s3 = new String("brave");
   
   if(s2 ===s3) //as s1 and s2 are objects their addresses are compared 
     console.log("same")
 else 
   console.log("different")


   console.log("---------------------------------------------------")

   let arr = [12,"www" , true, 34.5]

   arr.push(10,20);

 //  let v=arr.indexOf(10)
arr.splice(3,5)
   console.log(arr)