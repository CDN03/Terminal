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
    var isTitle = cmd_parts[0].indexOf("title");
    var isClear = cmd_parts[0].indexOf("clear");
    var isClear2 = cmd_parts[0].indexOf("cls");
    var isColor = cmd_parts[0].indexOf("color");
    if (isEcho == 0) echo(cmd_content);
    else if (isSCL == 0) scl();
    else if (isTitle == 0) title(cmd_content);
    else if (isClear == 0 || isClear2 == 0) clear();
    else if (isColor == 0) color(cmd_content);
    else failed();
    inp.value = "";
    out.innerHTML += "<br />";
    inp.style.width = 250 + "px";
}
function echo(content) {
    let fullSen = content.slice(5);
    if (fullSen.trim() === '') {
        out.innerHTML += "Echo is on";
    } else {
        out.innerHTML += fullSen;
    }
}
function title(content) {
    let fullSen = content.slice(6);
    if (fullSen.trim() === '') {
        out.innerHTML += "Current page title is: " + "<span class=\"special\"> " + document.title + " </span>";
    } else {
        document.title = fullSen;
        out.innerHTML += "Page title is now: " + "<span class=\"special\"> " + document.title + " </span>";
    }
}
function failed() {
    out.innerHTML += "Error: Entered command is not valid";
}
function scl() {
    popup.style.display = 'flex';
}
function clear() {
    out.innerHTML = "";
}
function color(color) {
    let ccolor = color.slice(6);
    let eccolor = ccolor.slice(0,1);
    let f;
    if (eccolor.indexOf("#") == 0) {
        out.style.color = ccolor;
    }
    // if (ccolor == 1) f = "#999999";
}
function exit(code) {
    let ecode = code.slice(5);
}