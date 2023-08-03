$name = $_POST['name'];
$phone = $_POST['phone'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);

$name = urldecode($name);
$phone = urldecode($phone);

$name = trim($name);
$phone = trim($phone);

echo $fio;
echo "<br>";
echo $email;
