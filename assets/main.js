
function popup() {
    document.getElementById("popup1").style.display = "none";
}
function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    var ecohc = input1.indexOf('echo');
    if (keys == "Enter") {
        if (ecohc != -1) {
            var ecoh = input1.slice(5,5000);
            if (ecoh == "" || ecoh == " ") {
                document.getElementById("output").innerHTML += 'Echo is On.' + "<br />";
            }
            console.log('"echo" Command Executed ' + 'Content: ' + ecoh);
            document.getElementById("output").innerHTML += '<p>'+ ecoh + '</p>' + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "help") {
            document.getElementById("output").innerHTML += "Available Commands:" + "<br />";
            document.getElementById("output").innerHTML += 'echo - Used to print' + "<br />";
            document.getElementById("output").innerHTML += 'help - Prints this menu' + "<br />";
            document.getElementById("output").innerHTML += 'dir - Displays live view of content in localhost' + "<br />";
            console.log('"help" Command Executed');
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
            console.log('"dir" Command Executed');
            document.getElementById("input1").value = "";
        } else {
            document.getElementById("output").innerHTML += "Invalid Command." + "<br />";
            console.log('Invalid Command Executed');
            document.getElementById("input1").value = "";
        }
    }
}
function str() {
    document.getElementById("output").innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
    const vvdr = setTimeout(popup, 3000);
    console.log('Successfully Loaded All of Commands.');
    console.log('Yet another useless website by MohsenEMX');
}