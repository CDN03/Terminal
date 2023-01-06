const version_index = "2.9";
const build_index = 590;
var title = "Web Terminal";
var lastcmd = localStorage.getItem('lastcmd');
var imgselector = document.getElementById('res_img');
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

function popup() {
    document.getElementById("popup1").style.display = "none";
}
function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    // checking for echo
    var ecohc = input1.indexOf('echo');
    var ecohc1 = input1.indexOf('ECHO');
    var ecohc2 = input1.indexOf('Echo');
    // checking for title
    var titl = input1.indexOf('title');
    var titl1 = input1.indexOf('Title');
    var titl2 = input1.indexOf('TITLE');
    // checking for ping
    var pping = input1.indexOf('ping');
    var pping1 = input1.indexOf('Ping');
    var pping2 = input1.indexOf('PING');
    // base64 command check
    var base64totext = input1.indexOf('base64totext');
    var base64_c = input1.indexOf('base64 -d');
    // base64 encode command check
    var text2base64 = input1.indexOf('text2base64');
    var base64_x = input1.indexOf('base64 -e');
    // base64 to image command check
    var base64_im = input1.indexOf('base64 -im');
    // checking if base64 contains a png/jpg tag
    var base64_im_jp = input1.indexOf('data:image/jpg;base64,');
    var base64_im_png = input1.indexOf('data:image/png;base64,');
    // checking for base64 help
    var base64_help = input1.indexOf('base64 ?');
    // checking for https or http in input
    var pinghttps = input1.indexOf('https://');
    var pinghttp = input1.indexOf('http://');
    
    if (keys == "Enter") {
        imgselector.setAttribute('style','display: none;');
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
            document.getElementById('output').innerHTML += 'echo (string) - Used to print custom text or see Echo state' + "<br />";
            document.getElementById('output').innerHTML += 'help - Prints this menu' + "<br />";
            document.getElementById('output').innerHTML += 'dir - Displays live view of content in localhost' + "<br />";
            document.getElementById('output').innerHTML += 'title (string) - Let\'s you see or change web page\'s title!' + "<br />";
            document.getElementById('output').innerHTML += 'exit - Closes Open Terminal' + "<br />";
            document.getElementById('output').innerHTML += 'close - Closes Open Terminal' + "<br />";
            document.getElementById('output').innerHTML += 'ping (address) - Pings the address given 4 times' + "<br />";
            document.getElementById('output').innerHTML += 'base64 (flag) (string) - Decodes or encodes the text or base64 strings, Possible flags: -d for decoding, -e for encoding, -im for converting base64 to image; check base64 ?' + "<br />";
            console.log('"help" Command Executed');
            document.getElementById('output').innerHTML += '<a href="https://github.com/CDN03/terminal/issues">' + "<p>If there is an issue, feel free to share them here.</p>" + '</a>' + "<br />";
            document.getElementById("input1").value = "";
        } else if (input1 == "dir" || input1 == "DIR" || input1 == "Dir") {
            document.getElementById('output').innerHTML += "List of Available Directories:" + "<br />";
            document.getElementById('output').innerHTML += "/assets/" + "<br />";
            document.getElementById('output').innerHTML += "    > /lib/" + "<br />";
            document.getElementById('output').innerHTML += "          ping.js" + "<br />";
            document.getElementById('output').innerHTML += "    > favicon.ico" + "<br />";
            document.getElementById('output').innerHTML += "    > JetBrainMono.woff" + "<br />";
            document.getElementById('output').innerHTML += "    > JetBrainsMonoBold.woff" + "<br />";
            document.getElementById('output').innerHTML += "    > main.js" + "<br />";
            document.getElementById('output').innerHTML += "    > style.css" + "<br />";
            document.getElementById('output').innerHTML += "    > og.png" + "<br />";
            console.log('"dir" Command Executed');
            document.getElementById("input1").value = "";
        } else if (input1 == "ver") {
            document.getElementById('output').innerHTML += "Version: " + version_index + ' , Build: ' + build_index + "<br />";
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
        } else if (titl != -1 || titl1 != -1 || titl2 != -1) {
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
        } else if (pping != -1 || pping1 != -1 || pping2 != -1) {
            var pingreq = input1.slice(5, 5000);
            if (pingreq == "" || pingreq == " ") {
                document.getElementById('output').innerHTML += 'Local Terminal Ping is: ' + '<span class="ping">' + '1'+ ' ms' + '</span>' + "<br />";
                console.log('"ping" Command Executed.')
                document.getElementById('input1').value = "";
            } else {
                var e_counter = 0;
                var ping_avg = 0;
                var ping_cclass = 'ping';
                var p = new Ping();
                // You may use Promise if the browser supports ES6
                if (pinghttp != -1 || pinghttps != -1) {
                    // nothing?
                } else if (pinghttp == -1 || pinghttps == -1) {
                    pingreq = 'http://' + pingreq;
                }
                var xrd = setInterval(function() {
                    if (e_counter < 4) {
                        p.ping(pingreq)
                        .then(data => {
                            ping_avg += data;
                            console.log("Successful ping: " + data);
                            document.getElementById('output').innerHTML += 'Ping to ' + pingreq + ' is: ' + '<span class="ping">' + data + ' ms' + '</span>' + "<br />";
                            document.getElementById('input1').value = "";
                        })
                        .catch(data => {
                            ping_avg += data * 1656;
                        console.error("Ping failed: " + data);
                        document.getElementById('output').innerHTML += 'Ping to ' + pingreq + ' Failed, Error Code: ' + '<span class="error">' + data + '</span>' + "<br />";
                        document.getElementById('input1').value = "";
                        })
                        e_counter++;
                    } else if (e_counter <= 4) {
                        ping_avg = ping_avg / 4;
                        if (ping_avg < 200) 
                        {ping_cclass = 'ping';} 
                        else if (ping_avg > 700) 
                        {ping_cclass = 'pingred';}
                         else if (ping_avg > 300) ping_cclass = 'pingyellow';
                        document.getElementById('output').innerHTML += 'Ping to ' + pingreq + ' Completed, Average Ping is: ' + `<span class="${ping_cclass}">` + ping_avg + ' ms' + '</span>' + "<br />";
                        clearInterval(xrd);
                    }
                },1000);
            }
        } else if (base64totext != -1 || base64_c != -1) {
            if (base64totext != -1) {
                var base64_s = input1.slice(13, 6000);
            } else if (base64_c != -1) {
                var base64_s = input1.slice(10, 6000);
            }
            if (base64_s == "" || base64_s == " ") {
                document.getElementById('output').innerHTML += "Invalid Syntax, Use base64 -d 'base64 string'" + "<br />";
                document.getElementById('input1').value = "";
            } else {
                // "main base64 decoding goes here"
                document.getElementById('input1').value = "";
                var res_decode = Base64.decode(base64_s);
                document.getElementById('output').innerHTML += "Decoded Text: " + '<span class="base64">' + res_decode + '</span>' + "<br />";
            }
            
        } else if (text2base64 != -1 || base64_x != -1) {
            if (text2base64 != -1) {
                var base64_f = input1.slice(13, 6000);
            } else if (base64_x != -1) {
                var base64_f = input1.slice(10, 6000);
            }
            if (base64_f == "" || base64_f == " ") {
                document.getElementById('output').innerHTML += "Invalid Syntax, Use base64 -e 'Your text'" + "<br />";
                document.getElementById('input1').value = "";
            } else {
                // "main base64 encoding goes here"
                document.getElementById('input1').value = "";
                var res_encode = Base64.encode(base64_f);
                document.getElementById('output').innerHTML += "Encoded Text: " + '<span class="base64">' + res_encode + '</span>' + "<br />";
            }
        } else if (base64_im != -1) {
            var base64_l = input1.slice(11, 800000);
            if (base64_im_jp != -1 || base64_im_png != -1) {
                imgselector.setAttribute('src',base64_l);
                imgselector.setAttribute('style','display: block;');
                imgselector.setAttribute('alt','Decoded Image');
            } else {
                var base64_lm = 'data:image/png;base64,' + base64_l;
                imgselector.setAttribute('src',base64_lm);
                imgselector.setAttribute('style','display: block;');
                imgselector.setAttribute('alt','Decoded Image');
            }
            document.getElementById('input1').value = "";
        }  else if (base64_help != -1) {
            document.getElementById('input1').value = "";
            document.getElementById('output').innerHTML += '<span class="helptitle">' + "Help menu for base64 tools" + '</span>' + "<br />";
            document.getElementById('output').innerHTML += "Basic usage for base64 tools is: base64 (flag) (string)" + "<br />";
            document.getElementById('output').innerHTML += "Possible flags:" + "<br />";
            document.getElementById('output').innerHTML += "? > Used to display this menu, example:" + "<br />";
            document.getElementById('output').innerHTML += "    base64 ?" + "<br />";
            document.getElementById('output').innerHTML += "-d > Used to decode base64 string, example:" + "<br />";
            document.getElementById('output').innerHTML += "    base64 -d VGhpcyBpcyBhbiBleGFtcGxl" + "<br />";
            document.getElementById('output').innerHTML += "-e > Used to encode normal string to base64, example:" + "<br />";
            document.getElementById('output').innerHTML += "    base64 -e This is an example" + "<br />";
            document.getElementById('output').innerHTML += "-im > Used to decode base64 images (Note: It is limited to 800,000 chars only!)(Note 2: You can save the image by right clicking/holding and pressing 'Save Image' button), example:" + "<br />";
            document.getElementById('output').innerHTML += "    base64 -im data:image/png;base64,iVBORw07twDEBAAAAAAAAAAAAAAAAAAwAGJrAABgPqdWQAAAABJRU5ErkJggg==" + "<br />";
        }
        else {
            document.getElementById('output').innerHTML += "Invalid Command." + "<br />";
            console.error('Invalid Command' + ' -- ' + 'Failed to Execute' + ' -- Failed Command: ' + input1);
            document.getElementById('input1').value = "";
        }
        lastcmd = input1;
        localStorage.setItem('lastcmd',lastcmd);
    } else if (keys == 'ArrowUp') { // Last command function
        document.getElementById('input1').value = lastcmd;
    }
}
function str() {
    document.getElementById('output').innerHTML += "Tip: Try to use 'Enter' key to execute command." + "<br />";
    console.log('Successfully Loaded All of Commands.');
    console.log('Yet another useless website by MohsenEMX');
    let betadet = {
        name: version_index,
        workdone: "80%",
        errors: "A lot",
        build: build_index
    }
    console.log('Beta Details: ');
    console.warn(betadet);
}