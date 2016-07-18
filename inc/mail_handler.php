<?php
require_once('email_config.php');
require('phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->SMTPDebug = 0;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication

$err = false;
$mail->Username = EMAIL_USER;                 // SMTP username
$mail->Password = EMAIL_PASS;                 // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->smtpConnect($options);
if($_POST) {
  $name = trim(stripslashes($_POST['contactName']));
  $email = trim(stripslashes($_POST['contactEmail']));
  $subject = trim(stripslashes($_POST['contactSubject']));
  $contact_message = trim(stripslashes($_POST['contactMessage']));

  // Check Name
 if (strlen($name) < 2) {
   $err = true;
   $error['name'] = "Please enter your name.";
 }
 if (strlen($subject) < 7){
   $err = true;
   $error['subject'] = "Please enter a subject.";
 }
 // Check Email
 if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
   $err = true;
   $error['email'] = "Please enter a valid email address.";
 }
 // Check Message
 if (strlen($contact_message) < 15) {
   $err = true;
   $error['message'] = "Your message should have at least 15 characters.";
 }

 $mail->From = $email;
 $mail->FromName = $name;
 $mail->addAddress(PERSONAL_EMAIL/*your email address, or the email the sender if you are sending confirmation*/ /*email address user name*/);     // Add a recipient
 $mail->addReplyTo($email);
 $mail->isHTML(true);
 $mail->Subject = $subject;
 $mail->Body    = $contact_message;

 $output = [];

 if(!$err){
   if(!$mail->send()) {
       //echo 'Message could not be sent.';
       //echo 'Mailer Error: ' . $mail->ErrorInfo;
       $output['error'] = 'Mailer Error: ' . $mail->ErrorInfo;

   } else {
       //echo 'Message has been sent';
       //$output['success'] = "Thank You! Your message has been recieved. We will get back to you in two days. Have a Nice Day!";
       echo "OK";
   }
 } else {
   $response = (isset($error['name'])) ? $error['name'] . "<br /> \n" : null;
   $response = (isset($error['subject'])) ? $error['subject'] . "<br /> \n" : null;
   $response .= (isset($error['email'])) ? $error['email'] . "<br /> \n" : null;
   $response .= (isset($error['message'])) ? $error['message'] . "<br />" : null;
   echo $response;
 }
}
?>
