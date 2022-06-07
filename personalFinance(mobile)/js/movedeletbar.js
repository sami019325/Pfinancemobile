console.log('sssssssssssssssssssss');




var runcode= 10;
function ggg(){
  document.getElementById('deleteImgOfRange').style.opacity= 1; 
  var sss = document.getElementById('deteleslide');
  console.log(sss.value)
  var fff = sss.value;
  //var fff= document.getElementById('deteleslide').value= sss; 
  console.log("fff: "+fff)






  if (fff == "10"){ //){
    console.log("unlocked");

    document.getElementById("bgOfDeletBar").style.backgroundColor ="red";
  console.log('baf088');
        
      tabbleData[getNbrOfClick] = {
      cellOfDate: "", 
      cellOfTitle: " ",
      cellOfAmount: "", 
      monthWithY: ""}

      var tabbleDatanew = tabbleData;
  
      const tabbleDatass = JSON.stringify(tabbleDatanew);
          localStorage.setItem('tabbleDatasss', tabbleDatass);
      
         // var storedNames = JSON.parse(localStorage.getItem("tabbleDatasss"));
         
         setTimeout(function(){
          location.reload();
          console.log("I am load bur of Delete functin");
        },700);
  


   }


   else if (fff == "9"){
    console.log("declined");
    document.getElementById("bgOfDeletBar").style.backgroundColor ="#b25f4a";
  console.log('baf088');
     
   

}
else if (fff == "8"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#b25f4a";
  console.log('baf088');
 

}
else if (fff == "7"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#b25f4a";
  console.log('baf088');
   
 

}
else if (fff == "6"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#77945c";
  console.log('9DF088');
   
 

}
else if (fff == "5"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#77945c";
  console.log('baf088');
   
 

}
else if (fff == "4"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#3bca6d";
  console.log('baf088');
 

}
else if (fff == "3"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#3bca6d";
  console.log('baf088');
  

 

}
else if (fff == "2"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#00ff7f";
  console.log('baf088');
  

 

}
else if (fff == "1"){
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#00ff7f";
  console.log('baf088');
  

 

}
else {
  console.log("declined");
  document.getElementById("bgOfDeletBar").style.backgroundColor ="#b2f088";
  console.log('baf088');
  
 

}



}











 function slideclick(){
  var sss = document.getElementById('deteleslide');
  console.log("sss: "+ sss.value)
  var fff = sss.value;
  //var fff= document.getElementById('deteleslide').value= sss; 
  console.log("fff: "+fff)

  if (fff == "10"){ //){
    console.log("unlocked");


        
      tabbleData[getNbrOfClick] = {
      cellOfDate: "", 
      cellOfTitle: " ",
      cellOfAmount: "", 
      monthWithY: ""}

      var tabbleDatanew = tabbleData;
  
      const tabbleDatass = JSON.stringify(tabbleDatanew);
          localStorage.setItem('tabbleDatasss', tabbleDatass);
      
         // var storedNames = JSON.parse(localStorage.getItem("tabbleDatasss"));
         
         setTimeout(function(){
          location.reload();
          console.log("I am load bur of Delete functin");
        },700);
  


   }


   else {
    console.log("cancled");
    document.getElementById('deteleslide').value= 0; 
   

}
}





/*

var runcode= 10;




do {
  //var sss = document.getElementById('deteleslide');

  if (sss == "5"){
    console.log("unlocked");
   }
   else if (sss!== "5" ){
    console.log("fucked up");
   }
}
while (runcode < 5);

*/ 

















/*
var inputRange = document.getElementsByClassName('pullee')[0],
    maxValue = 150, // the higher the smoother when dragging
    speed = 12, // thanks to @pixelass for this
    currValue, rafID;

// set min/max value
//inputRange.min = 0;
//inputRange.max = maxValue;

// listen for unlock
function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);
    
    // set to desired value
    currValue = +this.value;
}

function unlockEndHandler() {
    
    // store current value
    currValue = +this.value;
    
    // determine if we have reached success or not
    if(currValue >= maxValue) {
        successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}

// handle range animation
function animateHandler() {
    
    // update input range
    inputRange.value = currValue;
    
    // determine if we need to continue
    if(currValue > -1) {
    	window.requestAnimationFrame(animateHandler);   
    }
    
    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
    alert('unlocked');
    
    // reset input range
    inputRange.value = 0;
};

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false); 
*/