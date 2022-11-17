function rts(event) {
    var input1 = document.getElementById("input1").value;
    var keys = event.key;
    if (keys == "Enter") {
        if (input1 == "echo") {
            document.getElementById("output").innerHTML += "ECHO-" + "<br />";
        }
    }
}