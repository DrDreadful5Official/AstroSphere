// discordMessage.js

function sendMessage() {
    const message = "Someone has clicked your link!";
    const webhookURL = "https://discord.com/api/webhooks/1231425931453792256/zDbYK2ISGhEl32ory64ubBIB3jv0oPibP5XW1MZA7ztB32zvvZdVyzGBM2_yGimCi5Td";
    
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
    })
    .then(response => console.log('Message sent:', response))
    .catch(error => console.error('Error sending message:', error));
}
