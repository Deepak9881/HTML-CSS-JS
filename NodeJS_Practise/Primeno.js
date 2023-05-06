let count =0
for(let i=2;i<=200;i++){
    count=1
    for(let j=2; j<i;j++)
    { 
        if(i%j==0){
            count++;
        }
        else{
           continue
        }
    }
    if(count ==1){
        console.log(i); 
    }
}