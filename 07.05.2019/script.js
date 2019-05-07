/* 1ci TAPSIRIQ*/
var number = Number(prompt("Reqemi daxil et"));
var count=0;
while(number>0){
    if(number%10){
        count++;
    }
    number=number-number%10;
    number=number/10;
  
}console.log(count);




