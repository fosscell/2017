<?php
/*
INPUT: fromname, fromemail, toemail, message, subject
*/
// Check for empty fields
$response = array();
if (empty($_REQUEST['fromname']) || empty($_REQUEST['fromemail']) || empty($_REQUEST['message']) || empty($_REQUEST['toemail']) || empty($_REQUEST['subject'])) {
    $response['status']    = 1;
    $response['condition'] = "insufficient data provided";
} else {
    $name          = htmlspecialchars($_REQUEST['fromname']);
    $email_address = htmlspecialchars($_REQUEST['fromemail']);
    $mssg          = htmlspecialchars($_REQUEST['message']);
    // Create the email and send the message
    $to            = htmlspecialchars($_REQUEST['toemail']);
    $email_subject = htmlspecialchars($_REQUEST['subject']);
    // => https://css-tricks.com/sending-nice-html-email-with-php/
    $message       = '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr><td style='background: #eee;'><strong>name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
    $message .= "<tr><td><strong>e-mail:</strong> </td><td style='background: #eee;'>" . strip_tags($email_address) . "</td></tr>";
    $message .= "<tr><td style='background: #eee;'><strong>message:</strong> </td><td>" . htmlentities($mssg) . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";
    $email_body = $message;
    // To send HTML mail, the Content-type header must be set
    $headers    = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=ISO-8859-1' . "\r\n";
    $headers .= "From: " . $email_address . "\r\n";
    $headers .= "Reply-To: " . $email_address . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    $mail_response = mail($to, $email_subject, $email_body, $headers);
    if ($mail_response) {
        $response['status']    = 0;
        $response['condition'] = "success";
    } else {
        $response['status']    = 1;
        $response['condition'] = "fail";
    }
}
echo json_encode($response);
?>
