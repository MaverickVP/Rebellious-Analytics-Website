<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comment = $_POST["comment"];
    $email = $_POST["email"];

    // Validate the form data
    if (strlen($comment) < 25) {
        echo "Error: Inquiry too short. Minimum 25 characters.";
        return;
    }

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Error: Invalid email address.";
        return;
    }

    try {
        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        // Configure PHPMailer
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'rebelliousanalytics@gmail.com'; // Replace with your Gmail email address
        $mail->Password = 'kptv bngh erof opvi'; // Replace with your Gmail app password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set the sender and recipient
        $mail->setFrom('rebelliousanalytics@gmail.com', 'Maverick'); // Replace with your Gmail email address and your name
        $mail->addAddress($_POST["email"]); // Replace with the recipient email address

        // Set email content
        $mail->isHTML(false); // Set email format to plain text
        $mail->Subject = 'New Comment';
        $mail->Body = "Comment: " . $comment . "\n\nEmail: " . $email;

        // Send the email
        if ($mail->send()) {
            echo "Comment submitted successfully.";
        } else {
            echo "Error: " . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
