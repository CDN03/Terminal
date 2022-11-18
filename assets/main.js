
function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    if (keys == "Enter") {
        if (input1 == "echo") {
            document.getElementById("output").innerHTML += "ECHO is on" + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "help") {
            document.getElementById("output").innerHTML += "Available Commands:" + "<br />";
            document.getElementById("output").innerHTML += '<a href="https://github.com/CDN03/terminal/issues">' + "<p>If there is an issue, feel free to share them here.</p>" + '</a>' +"<br />";
            document.getElementById("input1").value = "";
        } else {
            document.getElementById("output").innerHTML += "Invalid Command." + "<br />";
            document.getElementById("input1").value = "";
        }
    }
}
function str() {
    document.getElementById("output").innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
}