function maxMinSearchBar(){
  var searchEngineJAVA = document.getElementById("myInput");
  searchEngineJAVA.classList.toggle("Max");

  var searcgImgJAVA = document.getElementById("searcgImg");
  searcgImgJAVA.classList.toggle("searcgImgChange");

  //---------------
  var searchEngineJAVA = document.getElementById("myInputDetails");
  searchEngineJAVA.classList.toggle("Max");

  var searcgImgJAVA = document.getElementById("searcgImg2");
  searcgImgJAVA.classList.toggle("searcgImgChange");

  //-------------
  var searchEngineJAVA = document.getElementById("myInputAmount");
  searchEngineJAVA.classList.toggle("Max");

  var searcgImgJAVA = document.getElementById("searcgImg3");
  searcgImgJAVA.classList.toggle("searcgImgChange");

};



function maxMinSearchBar2(){

  maxMinSearchBar()

// ----
};

function maxMinSearchBar3(){
  maxMinSearchBar()

};

//------------------------------

/*
function maxSearchBar(){
  document.getElementById("myInput").className="Max"
  document.getElementById("myInputDetails").className="Max"
  document.getElementById("myInputAmount").className="Max"

  document.getElementById("searcgImg").className="searcgImgChange"
  document.getElementById("searcgImg2").className="searcgImgChange"
  document.getElementById("searcgImg3").className="searcgImgChange"

}
*/ 

//=====================================================================
  function filter() {
    var el = document.getElementById("finterBG");
    if( el && el.style.display == 'none')    
        el.style.display = 'block';
    else 
        el.style.display = 'none';
}
 
 //===================================== area of filter==== hide filter============================

function displayNoneFilter1(){
  document.getElementById("finterBG").style.display="none"
};
function displayNoneFilter2(){
  displayNoneFilter1()
}; 
function displayNoneFilter3(){
  displayNoneFilter1()
};

function bgOfFilter(){
  displayNoneFilter1()
};
//================================== area of filter function==== show filter and search engine===========
function dateFilter(){
  document.getElementById("search1").style.display="block"
  document.getElementById("search2").style.display="none"
  document.getElementById("search3").style.display="none"

  document.getElementById("myInputDetails").value=""
  document.getElementById("myInputAmount").value=""
 // maxSearchBar();
};

function detailsFilter(){
  document.getElementById("search2").style.display="block"
  document.getElementById("search1").style.display="none"
  document.getElementById("search3").style.display="none"

  document.getElementById("myInput").value=""
  document.getElementById("myInputAmount").value=""
  //maxSearchBar();
}; //  myInputDetails    myInputAmount     myInput
 
function AmountFilter(){
  document.getElementById("search3").style.display="block"
  document.getElementById("search2").style.display="none"
  document.getElementById("search1").style.display="none"

  document.getElementById("myInput").value=""
  document.getElementById("myInputDetails").value=""
 // maxSearchBar();
};




  function searchfncnData() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablejava");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }

}; 




function searchfncnDetails(){
  let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputDetails");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablejava");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
};


  
  function searchfncnAmount(){
    let input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInputAmount");
      filter = input.value.toUpperCase();
      table = document.getElementById("tablejava");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
  };







/*
function searchfncnText() {
    let input, filter, table, tr, td, ii, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablejava");
    tr = table.getElementsByTagName("tr");

    for (ii = 0; ii < tr.length; ii++) {
        td = tr[ii].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[ii].style.display = "";
          } else {
            tr[ii].style.display = "none";
          }
        }       
      }
}; */ 