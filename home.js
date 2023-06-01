var buton = document.getElementById("box");

buton.onclick = ChangeColor;

function ChangeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    buton.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

};





msgButton.onclick = SendMessage;

function SendMessage() {

    var nameText = document.getElementById("nameText").value;
    var msg = document.getElementById("msg").value;
    var msgButton = document.getElementById("msgButton");
    var statement = nameText + msg;
    if (statement != "") {
        
        var element = "Name: " + nameText + "\nMessage: " + msg;
        const node = document.createElement("li");
        const textnode = document.createTextNode(element);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);

    }

}


