function Booked(){
    var Name = document.getElementsByTagName("input")[0].value;
    var Choose = document.getElementsByTagName("input")[1].value;
    var HowMany = parseInt(document.getElementsByTagName("input")[2].value);
    if (isNaN(HowMany) || HowMany <= 0) {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerHTML = "Please enter a valid number for how many.";
        return;
    }

    let price = HowMany * 10;
    document.getElementById("message").style.color="white";
    document.getElementById("message").innerHTML="Hello "+Name+" You have booked a table for  "+HowMany+" With a price "+price+"$.";
}