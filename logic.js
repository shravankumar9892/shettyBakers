var cakeList = []; // Order list with tags
var orderList = []; // Order list final
var nameParticipant = ""; // Participant name
var rollnoParticipant = ""; // Roll no

// Sending email on place order
function sendEmail() {
    if (typeof nameParticipant != 'undefined') {
        var template_params = {
            "reply_to": "reply_to_value",
            "from_name": String(nameParticipant)+", "+String(rollnoParticipant),
            "message_html": "<p>"+String(orderList)+"</p>"
         }
         
         var service_id = "default_service";
         var template_id = "template_QzIle3i7";
         emailjs.send(service_id, template_id, template_params);
         
         alert(String(nameParticipant)+'your order has been placed successfully. All the best!');
         
         // turning off session
         nameParticipant = null;
         delete nameParticipant;   
    }
    else {
        alert('Your session has timed out.');
    }
}
// To store name from modal
function storedata() {
    nameParticipant = document.getElementById("participant").value;
    rollnoParticipant = document.getElementById("rollno").value;
    if (nameParticipant == "") {
        alert('Participant name and admission no. required for submission');
        window.location.replace("https://shravankumar9892.github.io/shettyBakers/");
    }
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
