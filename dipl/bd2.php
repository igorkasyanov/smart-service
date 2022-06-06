<!DOCTYPE html>
<html lang="en">
<head>
<nav>
  <ul class="topmenu">
    <li><a href="index.php">Smart</a></li>
    <li><a href="tabl1.php">Ремонт смартфонов</a>
    <li><a href="tabl2.php">Ремонт планшетов</a>
    </li>
    <li><a href="o_nas.php">О нас</a>
    </li>
    <li><a href="contact.php">Контакты</a></li>
  </ul>
</nav>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="stylesheet" type="text/css" href="css/tablstyle.css">
	<title>Document</title>
</head>
<body>
<?php
  $host = '127.0.0.1';  
  $user = 'root';    
  $pass = 'root'; 
  $db_name = 'smart';   
  $link = mysqli_connect($host, $user, $pass, $db_name); 

  if (!$link) {
    echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
    exit;
  }
 
  if (isset($_POST["service"])) {
  
    $sql = mysqli_query($link, "INSERT INTO `zakaz` (`service`, `model` , `email`) VALUES ('{$_POST['service']}', '{$_POST['model']}', '{$_POST['email']}')");
  
    if ($sql) {

    } else {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
  }
  if (isset($_POST["model"])) {
    
    $sql = mysqli_query($link, "INSERT INTO `zakaz` (`service`, `model` , `email`) VALUES ('{$_POST['service']}', '{$_POST['model']}', '{$_POST['email']}')");
    if ($sql) {

     
    } else 
    {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
  }
?>
 <div id="container">
  <h1>&bull; ремонт планшетов &bull;</h1>
  <div class="underline">
  </div>
  <form action="" method="post" id="contact_form">
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder=" e-mail " name="email" id="email_input" required>
    </div>
    <div class="service">
      <label for="name"></label>
      <select placeholder="" name="subject" id="subject_input" required>
        <option disabled hidden selected>Замена экрана</option>
        <option>Замена батареи</option>
        <option>Обновление ПО</option>
        <option>Чистка динамиков (в зависимости от кол-ва)</option>
        <option>Сбор/разбор</option>
        <option>Замена датчика приближения</option>
        <option>Замена разъема для наушников</option>
        <option>замена фронтальной камеры</option>
        <option>Замена основной камеры</option>
        <option>Замена экрана</option>
      </select>
    </div>
    <div class="model">
      <label for="subject"></label>
      <select placeholder="" name="subject" id="subject_input" required>
        <option disabled hidden selected>xiaomi</option>
        <option>asus</option>
        <option>nokia</option>
        <option>lenovo</option>
        <option>hp</option>
        <option>htc</option>
        <option>samsung</option>
        <option>xiaomi</option>
        <option>meizu</option>
      </select>
    </div>
    <div class="submit">
      <input type="submit" value="Отправить" id="form_button" />
    </div>
  </form>
</div>

</html>