//var X= X;
// let X= 1;


const  Xsss =  localStorage.getItem("Xss");
var X = JSON.parse(Xsss);

if (X == null){
  var X= 1;
};


function runPlusBtnV(){ 
  
  //stores items in the localStorage
    var title = document.getElementById('expense').value;
    var amount = document.getElementById('amount').value;
    //var key = document.getElementById('VtitleOfIncomeOfForm').value; //gets the key from the user
   event.preventDefault();
    
    console.log(title);
    console.log(amount);
    

    if (title != "" && amount != "")
{
    // window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
    const titleVV = JSON.stringify(title);
    localStorage.setItem('titleVVV', titleVV);
  
  
    const amountVV = JSON.stringify(amount);
    localStorage.setItem('amountVVV', amountVV);
  
  
  
  const  Plustitle =  localStorage.getItem("titleVVV");
PlustitleVVV = JSON.parse(Plustitle);

const  Plusamount =  localStorage.getItem("amountVVV");
PlusamountVVV = JSON.parse(Plusamount);


console.log(PlustitleVVV + " "+ "PlustitleVVV");
console.log(PlusamountVVV + " "+ "PlustitleVVV");

// localStorage.setItem('titleVVV'+ X , titleVV);
// localStorage.setItem('amountVVV'+ X, amountVV);
// const  Plustitle =  localStorage.getItem("titleVVV"+X);
// const  Plusamount =  localStorage.getItem("amountVVV"+X);

return X== X++;


  
}
else
{
   alert("Please add a value");
}
  
 
}
  
function Xvalue(){
 
  // localStorage.setItem('Xss' , X);
  const Xs = JSON.stringify(X);
    localStorage.setItem('Xss', Xs);
  
  }
