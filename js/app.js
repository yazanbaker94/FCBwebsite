// guess my name
// guess my age
// guess my magic number

var realName = prompt("Whats your name? ");
var realAge = prompt("Whats your age? ");
var balance = prompt("Whats your balance in the bank?" );
var convertedBalance = parseInt(balance);


alert("Your real name is: " + realName);
alert("Your real age is: " + realAge);

function convertedBalanceFunction(balance) {

    if(convertedBalance == 100 && convertedBalance >= 0) {
        alert("You are doing well financially");
    
    } else if(convertedBalance < 100) {
    
        alert("You are broke");
    } else if(convertedBalance >= 101) {
        alert("You are super rich!");
    } else("Wrong Input! ");
}


convertedBalanceFunction(balance);

function render(){
    document.getElementById("guess").innerHTML = "Your real name is: " + realName;
    document.getElementById("guess1").innerHTML = "Your real age is: " + realAge;
    document.getElementById("guess2").innerHTML = "Your final balance is: " + convertedBalance;
    
}
render();




confirm("Press OK if you are happy!");

