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
    var isExit = cmd_parts[0].indexOf("exit");
    var isExit2 = cmd_parts[0].indexOf("close");
    var isSOT = cmd_parts[0].indexOf("sot");
    var isHelp = cmd_parts[0].indexOf("help");
    if (isEcho == 0) echo(cmd_content);
    else if (isSCL == 0) scl();
    else if (isTitle == 0) title(cmd_content);
    else if (isClear == 0 || isClear2 == 0) clear();
    else if (isColor == 0) color(cmd_content);
    else if (isExit == 0 || isExit2 == 0) exit(cmd_content);
    else if (isSOT == 0) sot();
    else if (isHelp == 0) help(cmd_content);
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
function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}
function color(color) {
    let ccolor = color.slice(6);
    let eccolor = ccolor.slice(0,1);
    let f;
    if (eccolor.indexOf("#") == 0) {
        out.style.color = ccolor;
    } else {
        if (ccolor == 1) out.style.color = "rgb(0, 26, 255)";
        else if (ccolor == 2)  out.style.color = "rgb(0, 194, 3)";
        else if (ccolor == 3)  out.style.color = "rgb(0, 238, 242)";
        else if (ccolor == 4)  out.style.color = "rgb(222, 0, 0)";
        else if (ccolor == 5)  out.style.color = "rgb(207, 4, 203)";
        else if (ccolor == 6)  out.style.color = "rgb(207, 183, 4)";
        else if (ccolor == 7)  out.style.color = "rgb(222, 222, 222)";
        else if (ccolor == 8)  out.style.color = "rgb(99, 99, 99)";
        else if (ccolor == 9)  out.style.color = "rgb(1, 91, 143)";
        else if (ccolor == 0)  out.style.color = "rgb(0, 0, 0)";
        else {
            ccolor = "#" + ccolor;
            out.style.color = ccolor;
        }
    }
}
function exit(code) {
    let ecode = code.slice(5);
    if (ecode.trim() == "") {
        out.innerHTML += "[process exited with code 1 (0x00000001)]";
    } else {
        let ecodeHex = decimalToHex(ecode,1);
        out.innerHTML += "[process exited with code " + ecode + " (0x" + ecodeHex + ")]";
        document.querySelector('.inparea').style.display = 'none';
    }
}
function sot() {
    window.location.href = "http://terminal.nashef.ir/Old";
}
function help(command) {
    let a = ["<br />","<span class=\"special\">", "</span>"];

    let hcommand = command.slice(5);
    if (hcommand.trim() === "") {
        out.innerHTML += "List of available commands: " + a[0];
        out.innerHTML += a[1] + "echo" + a[2] + " <String> - Prints the given string to console." + a[0];
        out.innerHTML += a[1] + "title" + a[2] + " <String> - Sets the given string as terminal title." + a[0];
        out.innerHTML += a[1] + "scl" + a[2] + " - Displays the Chabgelog screen." + a[0];
        out.innerHTML += a[1] + "clear" + a[2] + " - Clears the console, alias: " + a[1] + "cls" + a[2] + a[0];
        out.innerHTML += a[1] + "color" + a[2] + " <String> - Sets the given string as the terminal color." + a[0];
        out.innerHTML += a[1] + "exit" + a[2] + " <Number> - Exits the process with given Code, alias: " + a[1] + "close" + a[2] + a[0];
        out.innerHTML += a[1] + "sot" + a[2] + " - Displays the old Web Terminal." + a[0];
        out.innerHTML += a[1] + "help" + a[2] + " <String> - Prints help about given command." + a[0];
    } else {

    }
}