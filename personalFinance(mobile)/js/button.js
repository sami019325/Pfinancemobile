

function playanimation(){
  document.getElementById('submitBtn').className ='submitBtnAfter';
  document.getElementById('submitBtn').innerHTML= "Done";
  var start = new Date().getTime();
 
  var end = new Date().getTime();
  var dur = end - start;


  setTimeout(function(){
    document.getElementById('submitBtn').className ='submitBtn';
    document.getElementById('submitBtn').innerHTML= "Add";
    console.log("I am the third log after 4 seconds");
  },1000);
    
}


// show and hide 
function showhome(){ //bgOfPfinance
  document.getElementById("add").style.display = "none";
  document.getElementById("bgOfPfinance").style.display = "none";
  document.getElementById("bgOfHome").style.display = "block";
  // here the bustton of the content of Pfiance bar will be set
  
  document.getElementById("addBtn").style.opacity ="0";
  document.getElementById("PfinanceBtn").style.opacity ="0";
  document.getElementById("homeBtn").style.opacity ="1";

  document.getElementById("downTextP").style.display = "none";
  document.getElementById("downTextH").style.display = "block";
  document.getElementById("downTextA").style.display = "none";
};

function showPfinance(){
  document.getElementById("add").style.display = "none";
  document.getElementById("bgOfPfinance").style.display = "block";
  document.getElementById("bgOfHome").style.display = "none";
  // here the bustton of the content of Pfiance bar will be set
  
  document.getElementById("addBtn").style.opacity ="0";
  document.getElementById("PfinanceBtn").style.opacity ="1";
  document.getElementById("homeBtn").style.opacity ="0";

  document.getElementById("downTextP").style.display = "block";
  document.getElementById("downTextH").style.display = "none";
  document.getElementById("downTextA").style.display = "none";
};


function showAdd(){
  document.getElementById("add").style.display = "block";
  document.getElementById("bgOfPfinance").style.display = "none";
  document.getElementById("bgOfHome").style.display = "none";
  //

  document.getElementById("homeBtn").style.opacity ="0";
  document.getElementById("PfinanceBtn").style.opacity ="0";
  document.getElementById("addBtn").style.opacity ="1";

  document.getElementById("downTextH").style.display = "none";
  document.getElementById("downTextP").style.display = "none";
  document.getElementById("downTextA").style.display = "block";
}