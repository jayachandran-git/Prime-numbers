let number = parseInt(prompt('Enter the number'));
var count = 0;
if (number===1) {
    alert("1 is neither prime number nor a composite number");
} else {
for (let i=2; i<number;i++){
    if(number % i === 0){
     count++;
    }
}
}
if (count > 0) {
    alert(number +(" is not a prime number"))
}else{
     alert(number +(" is a prime number"))
}







// Display prime numbers

for(let i=2; i<=100;i++){
    let flag=0;
  for(let j=2;j<i;j++){
    if(i%j===0){
        flag=1;
        break;
    }
  }
  if(i>1 && flag===0){
    console.log(i);
  }
}




