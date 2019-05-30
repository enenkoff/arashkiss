<?php

//подключение к БД
$db = mysqli_connect('localhost','chenenk4672','8h5Br8Km', 'arashkiss');

//используем БД для настройки кодировки
mysqli_query($db,"set_client='utf8'");
mysqli_query($db,"set character_set_results='utf8'");
mysqli_query($db,"set collation_connection='utf8_general_ci'");
mysqli_query($db,"SET NAMES utf8");

?>