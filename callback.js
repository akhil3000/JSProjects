function Calculator(add,sub,div,mul)
{
    add(5,3);
    sub(5,3);
    div(6,2);
    mul(3,4);
}
function addition(a,b)
{
    console.log(a+b);
}
function substraction(a,b)
{
    console.log(a-b);

}
function divison(a,b)
{
    console.log(a/b);
}
function multiplication(a,b)
{
    console.log(a*b);
}

Calculator(addition,substraction,divison,multiplication);
