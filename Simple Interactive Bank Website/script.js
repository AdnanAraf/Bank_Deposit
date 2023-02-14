let addsubmit= document.querySelector('.add-submit');
let addnumber = document.querySelector('#add-number');
let Deposit= document.querySelector('.Deposit-card');
let amount = document.querySelector('.amount');
let m = 0 , sum = 0 , j = 0 ;

let array = new Array() ;

function adddeposit(number){
    let i;
    console.log(number,m);
    array[m] = parseInt(number);
   
  // console.log(array.length);
    for( i = m ; i < array.length ; i++){
       sum = sum +array[i];
    
       
       amount.innerText=`$`+sum;
       m++;
    }
  
    
}

addsubmit.addEventListener('click',function(){
    if(addnumber.value===''){
        alert("Please Insert Amount");
    }
    else{
       let number = parseInt(addnumber.value);
      if(number>0){
   
      adddeposit(number);
      balance(number,j);
    
addnumber.value='';
      }
    }
    
})



/*******************************************************ADD EXPENSE******************************************/

let expensesubmit= document.querySelector('.expense-submit');
let expensenumber = document.querySelector('#expense-number');
let Withdraw= document.querySelector('.Withdraw-card');
let amount1 = document.querySelector('.amount1');


let array1 = new Array() , sum1 = 0 , n = 0 , k = 1;

function expensewithdraw(number){
    let i;
    ///console.log(number,m);
    array1[n] = parseInt(number);
   
  // console.log(array.length);
    for( i = n ; i < array1.length ; i++){
       sum1 = sum1 +array1[i];
      
       amount1.innerText=`$`+sum1;
       n++;
    }
  
    
}

expensesubmit.addEventListener('click',function(){
    if(expensenumber.value===''){
        alert("Please Insert Amount");
    }
    else{
       let number = parseInt(expensenumber.value);
      if(number>0){
   
      expensewithdraw(number);
      balance(number, k);
expensenumber.value='';
      }
    }
    
})


/**********************************************************BALANCE CARD*******************************/

let balancecard = document.querySelector('.Balance-card');
let amount2 = document.querySelector('.amount2');

let balancesum = 0;

function balance(sum2,f){
    if(f==0){
balancesum= balancesum+sum2;
amount2.innerText= `$`+ balancesum;
console.log(balancesum);

    }
    else{
        if(f==1){
            balancesum= balancesum-sum2;
            amount2.innerText=`$`+balancesum;
            console.log(balancesum);
        }
    }
}