<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form</title>
 <style>
body{
background-color: plum;
}
</style>
</head>
<body>
    <h1>Send a Comment</h1> <br>
    <form id="commentForm">
        <label for="senderEmail">Your Email:</label><br>
        <input type="email" id="senderEmail" name="senderEmail"><br>
        <label for="comment">Comment:</label><br>
        <textarea id="comment" name="comment"></textarea><br>
        <button type="submit">Submit</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
