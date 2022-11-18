<?php

$recepient = "example@mail.ru";
$sitename = "Заслуженные артисты";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, "$message\n Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");