console.log("MY App is alive");

// Global Variables
let channelsArray = [];
let messagesArray = [];
let currentChannel = null; 

// Init 
function init() {
    console.log("MY App is initialized");
    getChannels();
    getMessages();
    loadMessagesIntoChannel();
    displayChannels();
    // loadEmojis();
    // document.getElementById("send-button").addEventListener("click", sendMessage);
    // document
    //     .getElementById("emoticon-button")
    //     .addEventListener("click", toggleEmojiArea);
    // document
    //     .getElementById("close-emoticon-button")
    //     .addEventListener("click", toggleEmojiArea);
    currentChannel = channelsArray[0]; 

}

function getChannels() {
    channelsArray = mockChannels;
}

function getMessages() {
    messagesArray =  mockMessages;
}

function loadMessagesIntoChannel() {
    channelsArray.forEach(channelElement => {
        messagesArray.forEach(messageElement => {
            if (channelElement.id == messageElement.channelNumber) {
                channelElement.messageContainer.push(messageElement)
            }
        });
    });
}

function displayChannels() {
    const favoriteList = document.getElementById('favorite-channels');
    const regularList = document.getElementById('regular-channels');    
    favoriteList.innerHTML = "";
    regularList.innerHTML = "";
    channelsArray.forEach((channel) => {
        const currentChannelHtmlString = `  <li id="` + channel.id + `"onclick="switchChannel(this.id)">
                                                <i class="material-icons">group</i>
                                                    <span class="channel-name">` + channel.name + `</span>
                                                    <span class="timestamp">` + channel.latestMessage + `</span>
                                            </li>`;
        if (channel.favorite) {
          favoriteList.innerHTML += currentChannelHtmlString;
        } else {
          regularList.innerHTML += currentChannelHtmlString;
        }
      });
}


// Functions
function switchChannel(newChannelId) { 
    // console.log("The currenty selected channel is: " + newChannel.name);
    // document.getElementById(currentChannel.id).classList.remove("selected");
    // document.getElementById(newChannel.id).classList.add("selected");
    // currentChannel = newChannel; //assignt object(!not object.id)
    // showHeader();
    //
    if (currentChannel.id != newChannelId) {
        document.getElementById(currentChannel.id).classList.remove("selected");
    }
    document.getElementById(newChannelId).classList.add("selected");
    channelsArray.forEach(channelElement => {
        if (channelElement.id === newChannelId) {
            currentChannel = channelElement;
        }
    });
    showHeader();
    // showMessages();
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
