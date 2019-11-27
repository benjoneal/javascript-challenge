
var tableData = data;

// YOUR CODE HERE!

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");
var $resetBtn = document.querySelector("#reset");


$searchBtn.addEventListener("click", handleSearchButtonClick);


// Build table with non-filtered data
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Create the table
function handleSearchButtonClick() {
  var filterDate = $dateInput.value;
  
  // Filter on the date column
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  renderTable();
}

// Clear all the fields
function handleResetButtonClick(){
  renderTable();
}

renderTable();
