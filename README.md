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
  bacground-color: lightblue;
  text-align: center;
  display: flex;
}
form{
  outline: 1px solid red;
  padding: 45px;
  display: flex;
  border-radius: 5px;
  text-align: center;
  height: 200px;
  width: 100px;
  background-color: plum;
  
  
}
form input{
  background-color: green;
  width: 100px;
  outline: none;
  border: none;
  
} 
#comment{
  background-color: green;
  width: 100px;
  outline: none;
  border: none;
}
</style>

<body>
 <h1>Send a Comment</h1> <br>
    <form id="commentForm">
        <label for="senderEmail">Your Email:</label><br>
        <input type="email" id="senderEmail" name="senderEmail"><br>
        <label for="comment">Comment:</label><br>
        <textarea id="comment" name="comment"></textarea><br>
        <button type="submit" onclick="">Submit</button>
    </form>

<script src="main.js"></script>
</body>
</html>
