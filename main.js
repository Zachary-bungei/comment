document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var email = form['email'].value;
    var message = form['message'].value;

    // Firebase Cloud Messaging (FCM) API
    fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'key=YOUR_API_KEY'
        },
        body: JSON.stringify({
            "priority": "high",
            "data": {
                "status": "NEW_MESSAGE",
                "email": email,
                "message": message
            },
            "to": "/topics/general"
        })
    })
    .then(response => response.json())
    .then(function(response) {
        console.log('Success!', response);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
});
