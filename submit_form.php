<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Load Composer's autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                  
        $mail->isSMTP();                                        
        $mail->Host       = 'smtp.gmail.com';                   
        $mail->SMTPAuth   = true;                               
        $mail->Username   = 'sergejalekseevic415@gmail.com';  
        $mail->Password   = '1728394560vilenkaaslanov';                    
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;        
        $mail->Port       = 465;                                

        // Recipients
        $mail->setFrom($email, $name);                          
        $mail->addAddress('informatica711classes@gmail.com');   

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Новое сообщение с контактной формы';
        $mail->Body    = "Имя: $name<br>Email: $email<br>Сообщение: $message";
        $mail->AltBody = "Имя: $name\nEmail: $email\nСообщение: $message";

        if ($mail->send()) {
            echo json_encode(['status' => 'success', 'message' => 'Сообщение отправлено']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Сообщение не может быть отправлено.']);
        }
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => "Method Not Allowed"]);
}