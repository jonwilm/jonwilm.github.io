<?php

require 'PHPMailer/PHPMailerAutoload.php';

if (empty($_POST['firstName']) || empty($_POST['lastName']) || empty($_POST['company']) || empty($_POST['inquiryType']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

  $jsonmail['empty'] = "vacio";
  $jsonmail['message']  = "Todos los Campos del Formulario son Requeridos"; 
  
} else {

  if (($_FILES['fileAdj']['size'] == 0) || ($_FILES['fileAdj']['type'] == 'application/pdf')) {

    $mail = new PHPMailer;

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = '';                       // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = '';             // SMTP username
    $mail->Password = '';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    $mail->From = '';             // Correo del remitente
    $mail->FromName = 'Form Web volantaerial';                 // Nombre del remitente
    $mail->Subject = 'Contact from web site - Volant Aerial'; // Asunto

    $mail->addReplyTo($_POST['email'], $_POST['firstName']);             // Responder a
    $mail->addAddress('', '');    // Destino
    // $mail->addCC('mbettoni@tessellmarketing.com');
    // $mail->addBCC('bcc@correo.com');

    $mail->addAttachment($_FILES['fileAdj']['tmp_name'], $_FILES['fileAdj']['name']);          //Add attachments

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Body     = '<strong>You have received a new email from the Volant Aerial website.</strong> <br><br>';
    $mail->Body    .= '<strong>First Name: </strong>' . $_POST['firstName'] . '<br><br>';
    $mail->Body    .= '<strong>Last Name: </strong>' . $_POST['lastName'] . '<br><br>';
    $mail->Body    .= '<strong>Company: </strong>' . $_POST['company'] . '<br><br>';
    $mail->Body    .= '<strong>Email: </strong>' . $_POST['email'] . '<br><br>';
    $mail->Body    .= '<strong>Inquiry Type: </strong>' . $_POST['inquiryType'] . '<br><br>';
    $mail->Body    .= '<strong>Message: </strong>' . $_POST['message'] . '<br><br>';
    
    if ($mail->send()) {
      $jsonmail['status']   = "true";
      $jsonmail['message']  = "The email was sent successfully!";
    } else {
      $jsonmail['status']   = "false";
      $jsonmail['message']  = "There was a error. Please try again!";
    }
  } else {
    $jsonmail['file']     = "nopdf";
    $jsonmail['message']  = "Archivo adjunto debe ser Formato PDF"; 
  }
  
}

echo json_encode($jsonmail);

?>