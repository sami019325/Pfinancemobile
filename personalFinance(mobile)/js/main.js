

// disply month  disply month  disply month  disply month  disply month  disply month  disply month  disply month 


const monthN = ["01","02","03","04","05","06","07","08","09","10","11","12"];

const dn = new Date();
let preMonth = monthN[dn.getMonth()];


var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var time = day + "/" + preMonth + "/" + year;




////////////////////////////////// arrey arrey arrey ///////////////////////////



var tabbleData = JSON.parse(localStorage.getItem("tabbleDatasss")); 
var totalRow = X ; 
if (tabbleData== null){
    var tabbleData = [ { cellOfDate: "time", 
                cellOfTitle: "This is how table looks like and you can note here ",
                cellOfAmount: "0000", 
                monthWithY: preMonth + year,
            }];
    var totalRow = 0;
}

    function array2(){
        tabbleData.unshift(
            { cellOfDate: time, 
                cellOfTitle: PlustitleVVV,
                cellOfAmount: PlusamountVVV, 
                monthWithY: preMonth + year,
            }
           
        );
    
       
        const tabbleDatass = JSON.stringify(tabbleData);
        localStorage.setItem('tabbleDatasss', tabbleDatass);
    
       // var storedNames = JSON.parse(localStorage.getItem("tabbleDatasss"));
       
       setTimeout(function(){
        location.reload();
        console.log("I am the third log after 2 seconds");
      },700);
    };


    



 

// add value in histry section 

// var monthInNmbr = PlusDateVVVV.slice(5,7);
// console.log(monthInNmbr);
/*
if (monthInNmbr == 12){
    var x = 'December';
    console.log("x is "+ x);
};
if (monthInNmbr == 02){
    var x = 'Decssssember';
    console.log("x is "+ x);
};



function showInHstry(){
    //
};
*/
