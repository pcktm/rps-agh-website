<?php
header('Content-Type: text/plain; charset=utf-8');
$allowed_origins = [
    'https://rps.agh.edu.pl',
    'http://localhost:3000',
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if ($origin === 'http://localhost:3000') {
    header('Access-Control-Allow-Origin: *');
} else if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method not allowed!');
}

if (!isset($_POST['message'], $_POST['email'], $_POST['name'])) {
    http_response_code(400);
    die('Missing data!');
};
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    die('Invalid email!');
};

$recipients = [
    'rps@agh.edu.pl',
];

$sender_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$sender_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

$recipients = implode(', ', $recipients);
$subject = sprintf('[Formularz] %s', $sender_name);
$subject_base64 = '=?UTF-8?B?' . base64_encode($subject) . '?=';

$from = '=?UTF-8?B?' . base64_encode($sender_name) . '?= <' . $sender_email . '>';

$headers = [
    'From' => $from,
    'Reply-To' => $sender_email,
    'Content-Type' => 'text/plain; charset=utf-8',
    'Content-Transfer-Encoding' => 'base64',
];

$date = date('Y-m-d H:i:s');
$constructed_message = sprintf('
Od: %s <%s>
Wysłano: %s
Id: %s
Treść:

%s
', $sender_name, $sender_email, $date, uniqid(), $message);

$message_base64 = base64_encode($constructed_message);

$res = mail($recipients, $subject_base64, $message_base64, $headers);

if ($res) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Error';
}
