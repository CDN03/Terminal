const version_index = "2.4b";
const build_index = 431;
var title = "Web Terminal";

function popup() {
    document.getElementById("popup1").style.display = "none";
}
function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    var ecohc = input1.indexOf('echo');
    var ecohc1 = input1.indexOf('ECHO');
    var ecohc2 = input1.indexOf('Echo');
    var titl = input1.indexOf('title');
    if (keys == "Enter") {
        if (ecohc != -1 || ecohc1 != -1 || ecohc2 != -1) {
            var ecoh = input1.slice(5, 5000);
            if (ecoh == "" || ecoh == " ") {
                document.getElementById('output').innerHTML += 'Echo is On.' + "<br />";
            }
            console.log('"echo" Command Executed' + ' -- ' + 'Content: ' + ecoh);
            document.getElementById('output').innerHTML += '<p>' + ecoh + '</p>' + "";
            document.getElementById("input1").value = "";
        } else if (input1 == "help" || input1 == "HELP" || input1 == "Help") {
            document.getElementById('output').innerHTML += "Available Commands:" + "<br />";
            document.getElementById('output').innerHTML += "ver - Used to see terminal version" + "<br />";
            document.getElementById('output').innerHTML += 'echo <string> - Used to print custom text or see Echo state' + "<br />";
            document.getElementById('output').innerHTML += 'help - Prints this menu' + "<br />";
            document.getElementById('output').innerHTML += 'dir - Displays live view of content in localhost' + "<br />";
            document.getElementById('output').innerHTML += 'title - Let\'s you see or change web page\'s title!' + "<br />";
            document.getElementById('output').innerHTML += 'exit - Closes Open Terminal' + "<br />";
            document.getElementById('output').innerHTML += 'close - Closes Open Terminal' + "<br />";
            console.log('"help" Command Executed');
            document.getElementById('output').innerHTML += '<a href="https://github.com/CDN03/terminal/issues">' + "<p>If there is an issue, feel free to share them here.</p>" + '</a>' + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "dir" || input1 == "DIR" || input1 == "Dir") {
            document.getElementById('output').innerHTML += "List of Available Directories:" + "<br />";
            document.getElementById('output').innerHTML += "/assets/" + "<br />";
            document.getElementById('output').innerHTML += "    > favicon.ico" + "<br />";
            document.getElementById('output').innerHTML += "    > JetBrainMono.woff" + "<br />";
            document.getElementById('output').innerHTML += "    > JetBrainsMonoBold.woff" + "<br />";
            document.getElementById('output').innerHTML += "    > main.js" + "<br />";
            document.getElementById('output').innerHTML += "    > style.css" + "<br />";
            console.log('"dir" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "ver") {
            document.getElementById('output').innerHTML += "Version: v1" + "<br />";
            console.log('"ver" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "clear") {
            document.getElementById('output').innerHTML = "";
            console.log('"clear" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "about") {
            document.getElementById('output').innerHTML += "About Me:" + "<br />";
            document.getElementById('output').innerHTML += '<a href="https://github.com/MohsenEMX">' + "<p>My Github</p>" + '</a>' + "<br />";
            document.getElementById('output').innerHTML += "Mohtava" + "<br />";
            document.getElementById('input1').innerHTML = "";
        } else if (titl != -1) {
            var titap = input1.slice(6, 5000);
            if (titap == "" || titap ==" ") {
                document.getElementById('output').innerHTML += 'Terminal Title is: ' + '<span class="spec">' + title + '</span>' + "<br />";
                console.log('"title" Command Executed.')
                document.getElementById('input1').value = "";
            } else {
                document.title = titap;
                title = titap;
                document.getElementById('output').innerHTML += "Successfully changed title!" + "<br />";
                console.log('"title" Command Executed' + ' -- ' + 'Content: ' + titap);
                document.getElementById('input1').value = "";
            }
        } else if (input1 == "exit" || input1 == "close") {
            document.getElementById('output').innerHTML += "Clsoing Terminal..." + "<br />";
            document.getElementById('input1').value = "";
            window.close();
            close();
            open(location, '_self').close();
        } else {
            document.getElementById('output').innerHTML += "Invalid Command." + "<br />";
            console.error('Invalid Command' + ' -- ' + 'Failed to Execute' + ' -- Failed Command: ' + input1);
            document.getElementById('input1').value = "";
        }
    }
}
function str() {
    document.getElementById('output').innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
    console.log('Successfully Loaded All of Commands.');
    console.log('Yet another useless website by MohsenEMX');
    let betadet = {
        name: version_index,
        workdone: "60%",
        errors: "969696969",
        build: build_index
    }
    console.log('Beta Details: ');
    console.warn(betadet);
}