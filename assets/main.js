const output = document.getElementById('input1');
function popup() {
    document.getElementById("popup1").style.display = "none";
}
function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    var ecohc = input1.indexOf('echo');
    // var mamad = input1.indexOf('dir');
    if (keys == "Enter") {
        if (ecohc != -1) {
            var ecoh = input1.slice(5, 5000);
            if (ecoh == "" || ecoh == " ") {
                output.innerHTML += 'Echo is On.' + "<br />";
            }
            console.log('"echo" Command Executed' + ' -- ' + 'Content: ' + ecoh);
            output.innerHTML += '<p>' + ecoh + '</p>' + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "help") {
            output.innerHTML += "Available Commands:" + "<br />";
            output.innerHTML += "ver - Used to see terminal version" + "<br />";
            output.innerHTML += 'echo <string> - Used to print custom text or see Echo state' + "<br />";
            output.innerHTML += 'help - Prints this menu' + "<br />";
            output.innerHTML += 'dir - Displays live view of content in localhost' + "<br />";
            console.log('"help" Command Executed');
            output.innerHTML += '<a href="https://github.com/CDN03/terminal/issues">' + "<p>If there is an issue, feel free to share them here.</p>" + '</a>' + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "dir") {
            output.innerHTML += "List of Available Directories:" + "<br />";
            output.innerHTML += "/assets/" + "<br />";
            output.innerHTML += "    > favicon.ico" + "<br />";
            output.innerHTML += "    > JetBrainMono.woff" + "<br />";
            output.innerHTML += "    > JetBrainsMonoBold.woff" + "<br />";
            output.innerHTML += "    > main.js" + "<br />";
            output.innerHTML += "    > style.css" + "<br />";
            console.log('"dir" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "ver") {
            output.innerHTML += "Version: v1" + "<br />";
            console.log('"ver" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "clear") {
            output.innerHTML = "";
            console.log('"clear" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "about") {
            output.innerHTML += "About Me:" + "<br />";
            output.innerHTML += '<a href="https://github.com/MohsenEMX">' + "<p>My Github</p>" + '</a>' + "<br />";
            output.innerHTML += "Mohtava" + "<br />";
        } 
        else {
            output.innerHTML += "Invalid Command." + "<br />";
            console.error('Invalid Command' + ' -- ' + 'Failed to Execute');
            output.value = "";
        }
    }
}
function str() {
    output.innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
    const vvdr = setTimeout(popup, 3000);
    console.log('Successfully Loaded All of Commands.');
    console.log('Yet another useless website by MohsenEMX');
}
