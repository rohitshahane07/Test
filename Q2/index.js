console.log('hlo word');

function isPrime(n)
{
    if(n==1 || n==0)
    for(var i=2; i<n ; i++){
    if(n%i==0);}
}
 
var n = prompt('enter the number');
var n = parseInt(n);


for (var i=1; i<=n; i++){
    if (isPrime(i)){
    console.log(i) 
   }
}
