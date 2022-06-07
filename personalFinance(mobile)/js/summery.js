var dataOfMonth = tabbleData.indexOf({
  monthWithY: '022022', // 
}); 


console.log(dataOfMonth);

/// get month get month get month /////////////////////////////////////

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dmonth = new Date();
var theMonth = monthNames[dmonth.getMonth()]
console.log(theMonth)

// Search for names.. /////////////////////////////////////////////////
//function insrtValueOfDay() {document.getElementById('divoamountJAVAD').innerHTML= amountOfToday;};


var arrayOfToday = tabbleData.filter(obj => obj.cellOfDate == time);
    console.log(arrayOfToday);

var amountOfToday = 0;

for (let ff = 0; ff < arrayOfToday.length; ff++) {
  var amountOfToday= amountOfToday+ JSON.parse(arrayOfToday.at(ff).cellOfAmount); 

    console.log(amountOfToday);
 //   function insrtValueOfDay()
};


////////////////////////////////////////////////////////////////////////// 
var timeMonth =preMonth + year;

var arrayOfMonth = tabbleData.filter(obj => obj.monthWithY == timeMonth /*time */ );
    console.log(arrayOfMonth);

var amountOfMonth = 0;

for (let ff = 0; ff < arrayOfMonth.length; ff++) {
  var amountOfMonth= amountOfMonth+ JSON.parse(arrayOfMonth.at(ff).cellOfAmount); 

    console.log(amountOfMonth);
 //   function insrtValueOfDay()
};









