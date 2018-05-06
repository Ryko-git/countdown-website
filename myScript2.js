// Set the date we're counting down to
var countDownDate2 = new Date("Jul 25, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {

    // Get todays date and time
    var now2 = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance2 = countDownDate2 - now2;
    
    // Time calculations for days, hours, minutes and seconds
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo3"
    document.getElementById("demo2").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";


    
    // If the count down is over, write some text 


    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("demo2").innerHTML = "EXPIRED";
    }



}, 1000);

