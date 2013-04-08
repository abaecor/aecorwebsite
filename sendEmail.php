<?php session_start();?>
<?php
if( $_SESSION['security_code'] == $_POST['captcha'] && !empty($_SESSION['security_code'] ) ) {
		// Insert you code for processing the form here, e.g emailing the submission, entering it into a database. 
		$response = 'success';
   } else {
		// Insert your code for showing an error message here
		echo 'wrong_captcha';
		exit;
   }
   
   
/* These are the variable that tell the subject of the email and where the email will be sent.*/

$emailSubject = '';
$mailto = 'jhaynes@aecortech.com';

/* These will gather what the user has typed into the fieled. */

$nameField = $_POST['name'];
$subjectField = $_POST['subject'];
$emailField = $_POST['email'];
$messageField = $_POST['message'];

/* This takes the information and lines it up the way you want it to be sent in the email. */


$headers = "From: $emailField\r\n"; // This takes the email and displays it as who this email is from.
$headers .= "Content-type: text/html\r\n"; // This tells the server to turn the coding into the text.
$success = mail($mailto, $subjectField, $messageField, $headers); // This tells the server what to send.
if($success){
	$response = 'success';
}else{
	$response = 'failure';
}
echo $response;
unset($_SESSION['security_code']);
?>