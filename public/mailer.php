<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method not allowed!');
}

if (!isset($_POST['message'], $_POST['sender'], $_POST['name'])) die('Missing data!');
if (!filter_var($_POST['sender'], FILTER_VALIDATE_EMAIL)) die('Invalid email!');

$recipients = [
    'rps@agh.edu.pl',
];

$sender_email = filter_var($_POST['sender'], FILTER_SANITIZE_EMAIL);
$sender_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$headers = [
    'From' => sprintf('%s <%s>', $sender_name, $sender_email),
    'Reply-To' => $sender_email,
];

$recipients = implode(', ', $recipients);
$subject = sprintf('[Formularz] Nowa wiadomość od %s', $sender_name, $sender_email);

# php's INSANE utf8 handling
$preferences = ['input-charset' => 'UTF-8', 'output-charset' => 'UTF-8'];
$encoded_subject = iconv_mime_encode('Subject', $subject, $preferences);
$encoded_subject = substr($encoded_subject, strlen('Subject: '));

$date = date('Y-m-d H:i:s');
$constructed_message = sprintf('
Od: %s <%s>
Wysłano: %s
Id: %s
Treść:

%s
', $sender_name, $sender_email, $date, uniqid(), $message);

$res = mail($recipients, $encoded_subject, $constructed_message, $headers);

if ($res) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Error';
}
