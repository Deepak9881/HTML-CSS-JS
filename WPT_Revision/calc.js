let str="/";
let a=10;
let b=2.45;

switch(str){
    case "+":
            console.log(a,str,b,"=",a+b);
            break;

    case "-":
            console.log(a,str,b,"=",a-b);
            break;
    
    case "*":
            console.log(a,str,b,"=",a*b);
            break;

    case "/":
            console.log(a,str,b,"=",a/b);
            break;
    default:
            console.log("Invalid chioce");
            break;
}