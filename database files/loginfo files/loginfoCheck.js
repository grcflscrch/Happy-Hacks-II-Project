document.getElementById("uname").value;
document.getElementById("pword").value;

var exis = false
var insi = false

var exi = JSON.stringify(loginfo).includes(uname);
if (exi === true) {
    var lo = JSON.stringify(loginfo).includes(pword);
    if (lo === true) {
        console.log('Login Successful');
        window.location.replace = "base.html";
    } else {
        console.log('Incorrect Password');
}
} else {
    console.log('No User Found');
}