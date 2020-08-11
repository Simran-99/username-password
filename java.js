alert('HI');
console.log('hello');
function hello(){
    console.log("hello world");
}
hello();
var saybye=function bye(){
    console.log("bye")
}
saybye();
function hello(Num){
    console.log(2*Number(Num))
}
hello(6);
function product(a,b){
    return(a*b);
}
product(2,4)
//Data structures
// arrays
var list=["Item1","item2","item3","item4"]
console.log(list[1])
var num=[1,2,3,4,5]
var fun=[function a(){
    console.log('are you mad')},
         function b(){
             console.log('are you happy')}
]
console.log(fun[0])
var items=["item1","item2","item3","item4"]
items.shift();
console.log(items)
items.pop();
console.log(items)
items.push('item5')
console.log(items)
items.shift();
console.log(items)
items.pop()
console.log(items)
items.concat(['items6 , items7'])
console.log(items)
