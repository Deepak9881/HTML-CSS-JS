let x=4;

let i=0;
for(i=2;i<=x/2;i++){
    if(x%i==0){
        break;
    }
}
if(i>x/2){
    console.log(x," is Prime number");
}
else{
    console.log(x," not a Prime number")
}