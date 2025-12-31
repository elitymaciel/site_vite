<?php
/**
 * PHP Proxy for Evolution API
 * Secures the API Key and Target Number on the server-side.
 */

// --- CONFIGURATION ---
$API_URL_BASE = 'https://evolutionapi.solartechsolutions.com.br';
$INSTANCE_NAME = 'maciel_erp';
$API_KEY = '9E49B7510753-49F9-BA8B-C7B1274BC97C';
$TARGET_NUMBER = '5594984231245';
// ---------------------

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Adjust this to your domain in production
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    exit;
}

// Extract data from frontend request
$name = $input['name'] ?? 'Não informado';
$email = $input['email'] ?? 'Não informado';
$phone = $input['phone'] ?? 'Não informado';
$company = $input['company'] ?? 'Não informada';
$source = $input['source'] ?? 'Portal';
$service = $input['service'] ?? 'Geral';

// Format message for WhatsApp
$message = "🚀 *Novo Lead - " . $source . "*\n\n" .
           "👤 *Nome:* " . $name . "\n" .
           "📧 *Email:* " . $email . "\n" .
           "📱 *Telefone:* " . $phone . "\n" .
           "🏢 *Empresa:* " . $company . "\n" .
           "🛠️ *Serviço/Fonte:* " . $service;

// Target Evolution API endpoint
$endpoint = $API_URL_BASE . "/message/sendText/" . $INSTANCE_NAME;

$payload = [
    "number" => $TARGET_NUMBER,
    "text" => $message
];

// Execute cURL
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'apikey: ' . $API_KEY
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'CURL error: ' . $curlError]);
    exit;
}

http_response_code($httpCode);
echo $response;
