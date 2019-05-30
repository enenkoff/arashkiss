<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>arashkiss</title>
    <link href="src/assets/css/styles.min.css" rel="stylesheet">
  </head>
  <body>

  <?php

  //подключаем файл БД к основному
  include "database/db.php";

  //выводим в переменную нужную таблицу из БД (сортировка будет по заголовку)
  $result = mysqli_query($db,"SELECT * FROM arashkiss ORDER BY name");
//  $myrow = mysqli_fetch_array($result);

  //выводим цикл из переменных массивов данных выбранной таблицы
  while ($myrow = mysqli_fetch_array($result)) {
      echo json_encode($myrow);
  }

  ?>
  <script>
      var db = <?php

          $d = mysqli_query($db,"SELECT * FROM arashkiss ORDER BY name");
          $usernames = array();
          while( $r = mysqli_fetch_array($d) ) {
              $usernames[] = $r;
          }
          echo json_encode( $usernames );

          ?>

      console.log(db)
  </script>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>
