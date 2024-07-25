document.getElementById('encryptBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('key').value;
    document.getElementById('output').value = encrypt(message, key);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const key = document.getElementById('key').value;
    document.getElementById('output').value = decrypt(message, key);
});

document.getElementById('sendBtn').addEventListener('click', function() {
    const encryptedMessage = document.getElementById('output').value;
    const email = document.getElementById('email').value;
    sendEmail(email, encryptedMessage);
});

function encrypt(message, key) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i) + parseInt(key);
        result += String.fromCharCode(charCode);
    }
    return result;
}

function decrypt(message, key) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i) - parseInt(key);
        result += String.fromCharCode(charCode);
    }
    return result;
}

function sendEmail(email, message) {
    const subject = encodeURIComponent('Secret Message');
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}
