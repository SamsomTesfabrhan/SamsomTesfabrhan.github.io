const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

   findNumber();
   let sum = 0;
   function findNumber(){
    readline.question('put ur number? ', input => {
        if(input === 'stop'){
            console.log(sum);
            readline.close();       
   }
         else{
            if(parseInt(input))
                sum += parseInt(input);

           process.nextTick(findNumber);   
}
        });}
  