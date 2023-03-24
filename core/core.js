const core_ver = "WTCore v1 alpha 6";
const wt_ver = "v3 alpha - build 5";

// Declaring and selecting required objects
var inp = document.querySelector("#in");
var out = document.querySelector("#output");
var imout = document.querySelector("#imout"); // Useless for now
let cmd_content = "";
// Possible Errors
var errors = [
    {
        code: 0,
        meesage: "Unknown Error"
    },
    {
        code: 1,
        message: "Procces ended by User"
    }
]
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
    out.innerHTML += "[guest@VirturalHost] " + cmd_content + "<br />";
    if (cmd_parts[0].indexOf("echo") == 0) echo(cmd_content);
    else if (cmd_parts[0].indexOf("scl") == 0) scl();
    else if (cmd_parts[0].indexOf("title") == 0) title(cmd_content);
    else if (cmd_parts[0].indexOf("clear") == 0 || cmd_parts[0].indexOf("cls") == 0) clear();
    else if (cmd_parts[0].indexOf("color") == 0) color(cmd_content);
    else if (cmd_parts[0].indexOf("exit") == 0 || cmd_parts[0].indexOf("close") == 0) exit(cmd_content);
    else if (cmd_parts[0].indexOf("sot") == 0) sot();
    else if (cmd_parts[0].indexOf("help") == 0) help(cmd_content);
    else if (cmd_parts[0].indexOf("rep") == 0) rep();
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
} // [guest@VirturalHost]
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
    out.innerHTML += "<span class=\"error\">" + "Error: Command is not valid" + "</span>";
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
    let a = ["<br />","<span class=\"special\">", "</span>", "<span class=\"error\">"];

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
        switch (hcommand) {
            case "echo" : {
                out.innerHTML += a[1] + "echo" + a[2] + " <String> - Prints the given string to console." + a[0];
                out.innerHTML += "If no string is given, prints the current Echo state (On by default)" + a[0];
                out.innerHTML += "Otherwise, will print the given string." + a[0];
                break;
            }
            case "title" : {
                out.innerHTML += a[1] + "title" + a[2] + " <String> - Sets the given string as terminal title." + a[0];
                out.innerHTML += "If no string is given, prints the current terminal title" + a[0];
                out.innerHTML += "Otherwise, will set the current terminal title as given string" + a[0];
                break;
            }
            case "scl" : {
                out.innerHTML += a[1] + "scl" + a[2] + " - Displays the Chabgelog screen." + a[0];
                break;
            }
            case "clear" : {
                out.innerHTML += a[1] + "clear" + a[2] + " - Clears the console, alias: " + a[1] + "cls" + a[2] + a[0];
                break;
            }
            case "cls" : {
                out.innerHTML += a[1] + "cls" + a[2] + " - Clears the console, alias: " + a[1] + "clear" + a[2] + a[0];
                break;
            }
            case "color" : {
                out.innerHTML += a[1] + "color" + a[2] + " <String> - Sets the given string as the terminal color." + a[0];
                out.innerHTML += "Given string can be a number from 0 - 9, or a RGB color code" + a[0];
                break;
            }
            case "exit" : {
                out.innerHTML += a[1] + "exit" + a[2] + " <Number> - Exits the process with given Code, alias: " + a[1] + "close" + a[2] + a[0];
                out.innerHTML += "If no number is given, exits with code 1" + a[0];
                break;
            }
            case "close" : {
                out.innerHTML += a[1] + "close" + a[2] + " <Number> - Exits the process with given Code, alias: " + a[1] + "exit" + a[2] + a[0];
                out.innerHTML += "If no number is given, exits with code 1" + a[0];
                break;
            }
            case "sot" : {
                out.innerHTML += a[1] + "sot" + a[2] + " - Redirects to old Web Terminal" + a[0];
                break;
            }
            case "help" : {
                out.innerHTML += a[1] + "help" + a[2] + " <String> - Prints help about given command." + a[0];
                out.innerHTML += "If no string is given, Displays the general help" + a[0];
                break;
            }
            case "rep" : {
                out.innerHTML += a[1] + "help" + a[2] + " <String> - Prints help about given command." + a[0];
                out.innerHTML += "If no string is given, Displays the general help" + a[0];
                break;
            }
            default : {
                out.innerHTML += a[3] + "Error: Command does not exist or is not in help database yet." + a[2];
            }
        }
    }
}
function rep() {
    out.innerHTML += "If you have any issues, please report them here: " + "<br />";
    out.innerHTML += "<span class=\"url\">" + "<a href=\"https://github.com/CDN03/terminal/issues\">"+ "https://github.com/CDN03/terminal/issues" + "</a>" + "</span>";
}
function ver() {
    out.innerHTML += "WTCore Version: " + core_ver + "<br />";
    out.innerHTML += "Web Terminal Version: " + wt_ver;
}
