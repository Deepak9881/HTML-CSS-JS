var str="/"
var x=13
var y=5
switch(str){
    
    case '+':
        console.log(x,'+',y,'=',x+y);
        break;
    case '-':
        console.log(x,'-',y,'=',x-y);
        break;
    case '*':
        console.log(x,'*',y,'=',x*y);
        break;
     case '/':
        console.log(x,'/',y,'=',x/y);
        break;
    case '%':
        console.log(x,'%',y,'=',x%y);
        break;
    default :
        console.log("Invalid operation");
        break;
}