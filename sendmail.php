<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  // От кого письмо
  $mail->setFrom('plotnikasin@gmail.com', 'Alex Dulepov');
  // Кому отправить
  $mail->addAddress('alexdulepov@rambler.ru');
  // Тема письма
  $mail->Subject = 'Hola!!!!';

  // Тело письма
  $body = '<h1>Добрый день</h1>';

  if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';    
  }
  if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> .$_POST['phone'].'</p>';    
  }

  $mail->Body = $body;

  // // Отправляем
  // if (!$mail->send()) {
  //   $message = 'Ошибка';
  // } else {
  //     $message = 'Данные отправлены!';
  //   }

  $response = ['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>
  
  
