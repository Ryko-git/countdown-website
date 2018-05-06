var countUpDate = new Date("May 1, 2018 00:00:00").getTime();




if (countUpDate) {
    countUpDate = new Date(countUpDate);
} else {
    countUpDate = new Date();
    localStorage.setItem('startDate', countUpDate);
}





// Update the count down every 1 second
var ux = setInterval(function() {
 
    // Get todays date and time
    var unow = new Date().getTime();
 
    // Find the distance between now an the count down date
    var udistance = unow - countUpDate.getTime();
 
    // Time calculations for days, hours, minutes and seconds
    var udays = Math.floor(udistance / (1000 * 60 * 60 * 24));
    var uhours = Math.floor((udistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var uminutes = Math.floor((udistance % (1000 * 60 * 60)) / (1000 * 60));
    var useconds = Math.floor((udistance % (1000 * 60)) / 1000);
 
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = udays + "d " + uhours + "h " + uminutes + "m " + useconds + "s ";
}, 1000);
