// TO MAKE THE NAVBAR STICKY //

// When the user scrolls the page, execute makeNavSticky
window.onscroll = function() {makeNavSticky()};

// Get the header
var header = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeNavSticky() {
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}

// LOGIN VALIDATION

function validation() {

    if (document.forms['login'].username.value === "") {
        if (document.forms['login'].password.value === "") {
            document.getElementById("error").innerHTML = "Please enter your username and password.";
            console.log("Login error.");
        } else {
            document.getElementById("error").innerHTML = "Please enter your username.";
            console.log("Login error.");
        }
    } else {
        if (document.forms['login'].password.value === "") {
            document.getElementById("error").innerHTML = "Please enter your password.";
            console.log("Login error.");
        } else {
            document.getElementById("error").innerHTML = "";
        }
    }
}