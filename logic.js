var cakeList = []; // Order list with tags
var orderList = []; // Order list final
var nameParticipant = ""; // Participant name


// Sending email on place order
function sendEmail() {
    var template_params = {
        "reply_to": "reply_to_value",
        "from_name": String(nameParticipant),
        "message_html": "<p>"+String(orderList)+"</p>"
     }
     
     var service_id = "default_service";
     var template_id = "template_QzIle3i7";
     emailjs.send(service_id, template_id, template_params);
     alert('Order has been placed successfully. All the best!');
}
// To store name from modal
function storedata() {
    nameParticipant = document.getElementById("participant").value;
    console.log(nameParticipant);
}


// Function to add pastries into the list on blackboard
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
    orderList.push(elem.children[0].textContent);
    // Adding cake name to li
    x.appendChild(x_);
    // Addign li to ul
    bucket.appendChild(x);
    elem.parentNode.removeChild(elem); // Removing cake from gallery

}