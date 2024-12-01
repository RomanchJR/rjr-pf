<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Basic validation
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Handle sending email (example using PHP mail function)
        $to = "your-email@example.com";
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for reaching out! We'll get back to you soon.";
        } else {
            echo "Oops! Something went wrong. Please try again.";
        }
    } else {
        echo "Please fill in all fields.";
    }
} else {
    echo "Invalid request.";
}
