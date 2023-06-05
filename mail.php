<?php
//get data from form  
$jmeno = $_POST['jmeno'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "tomasmladejovsky@gmail.com";
$subject = "Mail From website";
$txt = "Jmeno = " . $jmeno . "\r\n Email = " . $email . "\r\n Zprava =" . $message;
$headers = "From: noreply@barbermladejovsky.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:index.html");
?>