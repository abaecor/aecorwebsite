
<?php
session_start();
if($_SESSION['6_letters_code'] != $_POST['captcha']){
	$response = false;
	echo $response;
} else {
	$response = true;
	echo $response;
/* These are the variable that tell the subject of the email and where the email will be sent.*/

$emailSubject = '';
$mailto = 'jhaynes@aecortech.com';

/* These will gather what the user has typed into the fieled. */

$nameField = $_POST['name'];
$emailField = $_POST['email'];
$questionField = $_POST['question'];

/* This takes the information and lines it up the way you want it to be sent in the email. */

$body = "";

$headers = "From: $email\r\n"; // This takes the email and displays it as who this email is from.
$headers .= "Content-type: text/html\r\n"; // This tells the server to turn the coding into the text.
$success = mail($mailto, $emailSubject, $body, $headers); // This tells the server what to send.

}

?>