document.getElementById("uname").ariaValueMax;
document.getElementById("pword").ariaValueMax;

var exi = JSON.stringify(loginfo).includes(uname) --> true
if (exi === true) {
    var lo = JSON.stringify(loginfo).includes(pword) -- tr.ue
if (lo === true) {
    console.log('Login Successful')
} else {
    console.log('Incorrect Password')
}
} else {
    console.log('No User Found')
}