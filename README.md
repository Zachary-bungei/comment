<html lang="en">
<html>
<head>
    <title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="README.md" href="style.css">
    </title>
</head>
 <style>
body{
   background-color: plum;
   text-align: cener;
   display: flex;
}
form{
    background-color: light-blue;
    border-radius: 3px;
    width: 100px;
    outline: 1px. solid purple;
    padding: 30px;
    
}
input, textarea{
   width: 100px; 
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

<script src="main.js"></script>
</body>
</html>
