console.log("App is alive");

// Global Variables
let currentChannel = channel1; 

// Functions
function switchChannel(newChannel) { 
    console.log("The currenty selected channel is: " + newChannel.name);
    document.getElementById(currentChannel.id).classList.remove("selected");
    document.getElementById(newChannel.id).classList.add("selected");
    currentChannel = newChannel; //assignt object(!not object.id)
    showHeader();
}

function showHeader() {
    document.getElementById('channelName').innerHTML = currentChannel.name;
    document.getElementById('favorite-button').innerHTML = (currentChannel.favorite ? 'favorite' : 'favorite_border');
}

function sendMessage() {
    let messageText = document.getElementById('message-input').value;
    console.log("Input message: " + messageText);
    let messageString = `<div class="message outgoing-message">
                            <div class="message-wrapper">
                                <div class="message-content">
                                    <p>` + messageText + `</p>
                                </div>
                                <i class="material-icons">account_circle</i>
                            </div>
                            <span class="timestamp">11:45</span>
                        </div>`;
    document.getElementById('message-area').innerHTML = messageString;
    document.getElementById('message-input').value = ''; //reset input field
}

// Test_Function
// console.log("I've reached the Problem");
