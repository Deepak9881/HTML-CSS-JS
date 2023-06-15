let i,j;
i=j=0;

for( i=2; i<=200;i++){
    for( j=2; j<=i/2; j++){
        if(i%j==0){
            break;
        }
    }
    if(j>i/2){
        console.log(i, "is a prime number");
    }
    
}