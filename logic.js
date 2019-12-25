function contactus() {
    var elem = document.getElementById("contact-us");
    elem.value = "Call 543216789!";
    elem.style.transform = "scale(2.5)";
}

var cakeList = [];

function addList(clickedID) {
    var elem = document.getElementById(String(clickedID));
    cakeList.push(elem);

    // Appending to the list

    // Getting the ul
    var bucket = document.getElementById("cakes")
    // creating li
    var x = document.createElement("li");
    x.setAttribute("id", String(clickedID));
    // Adding cake name
    var x_ = document.createTextNode(elem.children[0].textContent);
    // Adding cake name to li
    x.appendChild(x_);
    // Addign li to ul
    bucket.appendChild(x);
    elem.parentNode.removeChild(elem); // Removing cake from gallery

}