const d = new Date();
const current_month = d.getMonth() + 1;
const current_year = d.getFullYear();
const yearly_increase = 0.0977;
var data = [];


var starting_amount = 1000;
var monthly_amount = 100;
var num_years = 10;

function dataArray(starting_amount,monthly_amount,num_years) {
  data = [];
  let m = current_month;
  let current_amount = starting_amount;
  for (var i = 0; i <= num_years; i++) {
    data.push([current_year + i, Math.ceil(current_amount * 100) / 100]);
    while (m < 13) {
      console.log(m);
      console.log(current_amount);
      current_amount = (current_amount + monthly_amount) * (1 + (yearly_increase)/12);
      m++;
    }
    m = 1;
  }
}

function Submit() {
  starting_amount = parseFloat(document.getElementById("myText1").value);
  monthly_amount = parseFloat(document.getElementById("myText2").value);
  num_years = parseFloat(document.getElementById("myText3").value);
  dataArray(starting_amount,monthly_amount,num_years);
  let result = data[data.length-1][1];
  document.getElementById("end_amount").innerHTML = "End Amount: $" + Math.ceil(result*100)/100;
  document.getElementById("graph-box").innerHTML = "";

  chart = anychart.line();

  // create a line series and set the data
  var series = chart.line(data);
  series.name("Current Investment");

  // set the container id
  chart.container("graph-box");

  // initiate drawing the chart

  var title = chart.title();
  title.text("Investment Simulation");
  title.enabled(true);


  // Set text font size.
  title.fontSize(48);

  chart.yAxis().title("Portfolio Value");
  chart.xAxis().title("Years");
  chart.xAxis().title().fontSize(20);
  chart.yAxis().title().fontSize(20);
  chart.draw();
}
