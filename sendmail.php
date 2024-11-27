<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate fields
    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "romanchrayamajhi@outlook.com"; // Your email
        $subject = "New Contact Form Submission";
        $headers = "From: " . $email . "\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";

        $body = "You have received a new message from your website contact form.\n\n";
        $body .= "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message:\n$message\n";

        if (mail($to, $subject, $body, $headers)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "invalid";
    }
} else {
    http_response_code(405);
    echo "Method not allowed";
}
?>
