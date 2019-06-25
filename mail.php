<?php
$name=filter_input(INPUT_POST,'name',FILTER_SANITIZE_STRING);
$mail=filter_input(INPUT_POST,'email',FILTER_VALIDATE_EMAIL);
$tel=filter_input(INPUT_POST,'tel',FILTER_SANITIZE_STRING);
$company=filter_input(INPUT_POST,'company',FILTER_SANITIZE_STRING);
$mes=filter_input(INPUT_POST,'message',FILTER_SANITIZE_STRING);
if(!$mail){
    header('HTTP/1.0 400 Bad Request',400);
    return 'invalid email';
}
$to = 'info@maksis.by';
// емайл получателя

$subject = "Mail from site";
// тема письма

$message = "Пользователь {$name},<br> компания {$company}, <br>";
$message.="email: {$mail}, <br> телефон {$tel} <br>";
$message.="<br>";
$message.="Сообщение: ".striptags($mes);

$mailheaders = "Content-type:text/html;charset=UTF-8";
// формат письма html

$mailheaders .= "From: SiteRobot <noreply@siterobot.ru>rn";
$mailheaders .= "Reply-To: noreply@siterobot.rurn";
// емайл отправителя и емайл для ответа

mail($to, $subject, $message, $mailheaders);
echo json_encode(['success'=>'mail send']);
return;