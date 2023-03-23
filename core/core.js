// Declaring and selecting required objects
var inp = document.querySelector("#in");
var out = document.querySelector("#output");
var imout = document.querySelector("#imout");
let cmd_content = "";
// Change Input Element Width based on length of command
inp.addEventListener("input", function() {
    inp.style.width = inp.value.length * 10 + "px";
}); 

// Main Core
inp.addEventListener("keydown", function(e) {
    
    if (e.code === "Enter") {
        execute(e);
    }
});
function execute(e) {
    // All code goes here
    cmd_content = inp.value;
    let cmd_parts = cmd_content.split(" ");
    cmd_parts[0] = cmd_parts[0].toLowerCase();
    var isEcho = cmd_parts[0].indexOf("echo");
    var isSCL = cmd_parts[0].indexOf("scl");
    if (isEcho == 0) echo(cmd_parts);
    else if (isSCL == 0) scl();
    else failed();
    inp.value = "";
    out.innerHTML += "<br />";
    inp.style.width = 250 + "px";
}
function echo(content) {
    let fullSen = content.slice(5,5000);
    console.log(fullSen);
    out.innerHTML += fullSen;
}
function title(content) {

}
function failed() {
    out.innerHTML += "Error: Entered command is not valid";
}
function scl() {
    popup.style.display = 'flex';
}