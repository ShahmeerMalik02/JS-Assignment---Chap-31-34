// *******************************************************  QUESTION # 01 **********************************************************************

var date=new Date();
console.log(date);

// *******************************************************  QUESTION # 02 **********************************************************************

var date=new Date();
var month=["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];
alert(month[date.getMonth()]);

// *******************************************************  QUESTION # 03 **********************************************************************

var date=new Date();
var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
console.log(day[date.getDay()]);

// // *******************************************************  QUESTION # 04 **********************************************************************

var date=new Date();
var day=date.getDay()
if(day===0|| day===6){
alert("its a funday");
}
else{
   alert("Enjoy your work");
}

// *******************************************************  QUESTION # 05 **********************************************************************

var date=new Date();
var todayDate=date.getDate()
if(todayDate<16){
alert("First fifteen day of month")
}else{
    alert("Last fifteen day of month")
}

// *******************************************************  QUESTION # 06 **********************************************************************

var currentDate=Date.now();
var currentDateInMins=currentDate / (1000*60);
var finalResult = Math.floor(currentDateInMins)
console.log(finalResult);

// *******************************************************  QUESTION # 07 **********************************************************************

var date=new Date();
var hours=date.getHours();
if(hours < 12){
alert("It's AM");
}
else{
    alert("It's PM");
}

// *******************************************************  QUESTION # 08 **********************************************************************

var laterDate=new Date("Dec, 31, 2020");
console.log(laterDate);

// *******************************************************  QUESTION # 09 **********************************************************************

var ramzanDate=new Date("june, 18, 2015");
var todayDate=new Date();
var difference=todayDate-ramzanDate ;
var finalResult=Math.floor(difference / (1000*60*60*24));
console.log(finalResult);

// *******************************************************  QUESTION # 10 **********************************************************************

var referenceDate=new Date();
var beginningOf2015=new Date("january,1,2015");
var difference=Math.floor((referenceDate-beginningOf2015 ) /  1000);
console.log(difference);

// *******************************************************  QUESTION # 11 **********************************************************************

let currentDateTime = new Date();
let currentHour = currentDateTime.getHours();
let result = currentDateTime.setHours(currentDateTime.getHours() + 1);

document.write("Date and time one hour ahead: " + new Date(result));

// *******************************************************  QUESTION # 12 **********************************************************************

var date100YearsBack=new Date();
date100YearsBack.setFullYear(date100YearsBack.getFullYear()-100)
console.log(date100YearsBack);

// *******************************************************  QUESTION # 13 **********************************************************************

var userAge=prompt("Enter your age ");
var date=new Date();
var birthYear=date.getFullYear()-userAge;
console.log(birthYear);

// *******************************************************  QUESTION # 14 **********************************************************************

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var NumberUnits = 410;
var chargeUnits = 16;
var lateCharges = 350;
var netAmount = NumberUnits * chargeUnits;
var grossAmount = netAmount + lateCharges;

document.write(`<h1>K-Electric Bill</h1>
    <br> Customer Name : <b>Ali</b> <br>
    Month: <b>${months[new Date().getMonth()]}</b><br>
    Number of units: <b>${NumberUnits}</b><br>
    Charges per unit : <b>${chargeUnits}</b><br><br>
    Net Amount payable (within Due date): <b>${netAmount.toFixed(2)}</b> <br>
    Late payment surcharge : <b>${lateCharges.toFixed(2)}</b> <br>
    Gross amount payable (after Due Date): <b>${grossAmount.toFixed(2)}</b><br>
`);

