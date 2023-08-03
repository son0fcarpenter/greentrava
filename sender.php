<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

$to = "plotnikasin@gmail.com";
$date = date ("d.m.Y");
$time = date ("h:i");
$from = $phone;
$subject = "Заявка с сайта";

$msg = "
Имя: $name /n
Телефон : $phone /n";
mail($to, $subject, $msg, "From: $to ");
?>

