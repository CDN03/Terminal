window.onload = function() {
    var inputrsf = document.getElementById("input1").focus();
    console.log('Successfully Loaded All of Commands.');
  }
function popup() {
    document.getElementById("popup1").style.display = "none";
}
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
        } else if (input1 == "dir") {
            document.getElementById("output").innerHTML += "List of Available Directories:" + "<br />";
            document.getElementById("output").innerHTML += "/assets/" + "<br />";
            document.getElementById("output").innerHTML += "    > favicon.ico" + "<br />";
            document.getElementById("output").innerHTML += "    > JetBrainMono.woff" + "<br />";
            document.getElementById("output").innerHTML += "    > JetBrainsMonoBold.woff" + "<br />";
            document.getElementById("output").innerHTML += "    > main.js" + "<br />";
            document.getElementById("output").innerHTML += "    > style.css" + "<br />";
            document.getElementById("input1").value = "";
        } else {
            document.getElementById("output").innerHTML += "Invalid Command." + "<br />";
            document.getElementById("input1").value = "";
        }
    }
}
function str() {
    document.getElementById("output").innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
    const vvdr = setTimeout(popup, 3000);
}