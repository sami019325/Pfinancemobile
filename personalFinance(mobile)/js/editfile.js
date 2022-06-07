



// editBtnOfTableAndUnique // this code will help to udentify the id number of the clicked button 
/* 
function GFG_click(clicked) {
    var ClickedNmr =clicked;
    console.log(ClickedNmr);
    console.log("ID = "+clicked);
} 
*/ 



function showEditBar(){
    document.getElementById('bgOfEditBar').style.display="block";
}



function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


// delete iten and show list ==========================================
var getNbrOfClick = [];
var getNbrOfClick2 = [];

function GFG_click(clicked) {
 var   ClickedNmr = clicked;
    console.log(ClickedNmr);
    
 
    var Numberdd = parseFloat(ClickedNmr)
    console.log("ff"+Numberdd);

    getNbrOfClick[0]=Numberdd;
    console.log("array"+ getNbrOfClick);
    // ClickedNmr+1 
    // numberdd = Integer.parseInt(ClickedNmr);
 //    console.log("int"+numberdd);

var ClickedNmr2 = Numberdd+1; 
console.log(ClickedNmr2)

getNbrOfClick2[0]= ClickedNmr2;
    console.log("array"+ getNbrOfClick2);
};     

/*
function deteleItem(){



    tabbleData[getNbrOfClick] = {
    cellOfDate: "", 
    cellOfTitle: " ",
    cellOfAmount: "", 
    monthWithY: ""}


 // tabbleData.splice(getNbrOfClick, getNbrOfClick);

    var tabbleDatanew = tabbleData;

    const tabbleDatass = JSON.stringify(tabbleDatanew);
        localStorage.setItem('tabbleDatasss', tabbleDatass);
    
       // var storedNames = JSON.parse(localStorage.getItem("tabbleDatasss"));
       
       setTimeout(function(){
        location.reload();
        console.log("I am load bur of Delete functin");
      },700);

 
};

*/ 

function hideEditbar(){
    document.getElementById('bgOfEditBar').style.display="none";
}; 




// insert value from table data to field

var ddaymonth ;
   var ddayday ;
   var ddayyear ;
   var deditedDate;
   // var IsDayLessThanTen; 
function insValue(){
    dateget= tabbleData[getNbrOfClick].cellOfDate;
   amountget= tabbleData[getNbrOfClick].cellOfAmount;
   tiyleget= tabbleData[getNbrOfClick].cellOfTitle;
   console.log("clicked value is"+ dateget+ tiyleget+ amountget);
   
   if(dateget.length== 9){
    
    dateget = "0"+dateget;
    console.log("edited date is : "+ dateget)
   // IsDayLessThanTen = 2; 
     
  //  console.log("IsDayLessThanTen = true; "+IsDayLessThanTen)
}
  else{
    dateget = dateget;
  //  IsDayLessThanTen = 1; 
    
   // console.log("IsDayLessThanTen = 1; "+ IsDayLessThanTen)
  };

  
   ddaymonth = dateget.slice(3, 5);
    ddayday = dateget.slice(0, 2);
    ddayyear = dateget.slice( 6, 10);
    deditedDate = ddayyear+"-"+ddaymonth +"-"+ddayday;

   // add value to edit field
   
   document.getElementById('dateUpDate').defaultValue =  `${deditedDate}`;//"2014-02-09"; // dateget;
   document.getElementById('DetailsUpDetails').defaultValue = tiyleget;
   document.getElementById('AmountUpAmount').defaultValue = amountget;
}


/* function changeType(){
    document.getElementById('dateUpDate').type ="date";
} */


// eidt button bar=====================================================================
function editBtnOfEdit(){
    
    let dateValueOfEditBar= document.getElementById("dateUpDate").value;


    var daymonth; 
    var ISDateISLess = dateValueOfEditBar.slice(8, 10);
    console.log(ISDateISLess);
    if (ISDateISLess== "01" || ISDateISLess== "02" || ISDateISLess=="03" || ISDateISLess=="04"  || ISDateISLess=="05"  || ISDateISLess=="06"  || ISDateISLess=="07"  || ISDateISLess=="08"  || ISDateISLess=="09"){
         daymonth = dateValueOfEditBar.slice(9, 10);
    }
   else { daymonth = dateValueOfEditBar.slice(8, 10);};
   
   let dayday = dateValueOfEditBar.slice(5, 7);
   let dayyear = dateValueOfEditBar.slice( 0, 4);
  let editedDate = daymonth +"/"+dayday+"/"+dayyear;// document.getElementById("dateUpDate").value; //
  let montheditbar = dayday+dayyear;
  console.log(montheditbar);

    console.log(editedDate);
     //editedDate  
    let detailsValueOfEditBar= document.getElementById("DetailsUpDetails").value;
    let AmountValueOfEditBar= document.getElementById("AmountUpAmount").value; 
   // let dateValueOfEditBar= document.getElementById("dateUpDate").value;   
        console.log(dateValueOfEditBar)
        console.log(detailsValueOfEditBar)
        console.log(AmountValueOfEditBar)


        console.log(tabbleData[getNbrOfClick]);
        // 
        tabbleData[getNbrOfClick] = {
            cellOfDate: editedDate, //dateValueOfEditBar, 
            cellOfTitle: detailsValueOfEditBar,
            cellOfAmount: AmountValueOfEditBar,
            monthWithY: montheditbar
        };
console.log(tabbleData[11]);
console.log(tabbleData);

const tabbleDatass = JSON.stringify(tabbleData);
        localStorage.setItem('tabbleDatasss', tabbleDatass);
          
       setTimeout(function(){
        location.reload();
        console.log("I am load bur of update functin");
      },200);   
}




/*
var nodes = document.getElementById("tdEditBtn");

for (var im = 0; im < 9; im++) {
   nodes[im].addEventListener('click', function() {
      console.log('You clicked element #' + im);

   });
}



// onclick='seeBtnNo()'   // nodes.length






var allActionButtons = document.getElementsByClassName("tdEditBtn");
 

function seeBtnNo(){
    for (var i = 0; i < allActionButtons.length; i++) {
 
        allActionButtons[i].addEventListener('click', functionToRunWhenClicked, false);
       
      }
       
      var functionToRunWhenClicked = function () {
        console.log('samisamisami')
      }
      

};



//=================================================================================================================


  var console= 0; 
  
  
  for (var i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(){
        return function() {
            currD = i;
            console.log(i);
        }
    });
}




let str = "Please locate where 'locate' occurs!";
document.getElementById("demo").innerHTML = str.indexOf("locate");


console.log("sssssssssssssssssssssssssssssssssssssssssssssssssss")



// window.onload = 
function seeBtnNo(){

    var    description = document.getElementsByClassName('description'),
            buttons = document.getElementsByClassName('tdEditBtn');
    
    var currD = 0; // this var stands for the current description that should be shown
    
    var show = function(){
    
        for( var im = 0; im < description.length; im++ ){
    
            if( im !== currD ){
                description[im].style.display='none';
            }
    
            else if( im === currD ){
                description[im].style.display='block';   
            }
    
        }
    
    }; 
    
      for (var im = 0; im < tabbleData.length; im++){
        buttons[i].addEventListener('click', function(){
            currD = im;
            console.log(im);
        });
    }
    
        window.setInterval(show,300);
    }; */ 