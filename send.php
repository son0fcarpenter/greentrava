<html>
<head>
<title>Форма заявки с сайта</title>
</head>
<body>
<?php
//проверяем, существуют ли переменные в массиве POST
if(!isset($_POST['name']) and !isset($_POST['email'])){
 ?><form id="order" class="feedback__form form flex" action="send.php" method="POST">
    <div class="form__inner flex">
    <input class="form__input form__phone" name="name" type="text" placeholder="Введите Ваше имя">
    <input class="form__input form__email" name="phone" type="tel" placeholder="+7(999)999-99-99" required>              
    <label class="form__check">
      <input type="checkbox" required> <span class="form__textprivate">Нажимая на&nbsp;кнопку, я&nbsp;соглашаюсь с </span><a href="#">политикой конфиденциальности.</a>
    </label>
    </div>
     <div class="form__blockbutton flex">
      <button type="submit" class="form__send btn-reset">Отправить</button>
      </div>            
      </form><?php
} else {
 //показываем форму
 $name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);
 if (mail("plotnikasin@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$phone ,"From: alexdulepov@rambler.ru \r\n")){
 echo "Сообщение успешно отправлено";
 } else {
 echo "При отправке сообщения возникли ошибки";
 }
}
?>
</body>
</html>
