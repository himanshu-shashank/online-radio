<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "radiodb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//user details
	$fname = $_POST['fname'];
	$lname=$_POST['lname'];
	$gender=$_POST['gender'];
	$email = $_POST['email'];
	$uid=$_POST['uid'];
	
$sql = "INSERT INTO user1 (fbid,firstname, lastname, email,gender)
VALUES ('$uid', '$fname', '$lname','$email','$gender')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

?>

