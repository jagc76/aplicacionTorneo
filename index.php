<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

//Para conexión con la base de datos
function getDB(){
    $dbhost = "localhost"; //Nombre del servidor a conectarse
    $dbname = "ejercicioionic"; //Nombre de la base de datos
    $dbuser = "jaime"; //Usuario
    $dbpass = "nicolsara2020"; //Contraseña
    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname"; //Para conectarme
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass); //Hace la conexión
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Que me añada excepciones y errores
    return $dbConnection;
}
$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});
//funcion agregar en la tabla empleados.
$app->post('/add', function ($request, $response, $args) {  
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB(); 
		$sth = $db->prepare("INSERT INTO empleado 
										(id_empleado, nom_empleado, edad_empleado) VALUES (?,?,?)");
		
		$sth->execute(array($data['id_emp'], $data['nombre'], $data['edad'])); 
		$response->getBody()->write('{"error":"ok"}'); 
}catch(PDOException $e){

			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); 
		}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->addErrorMiddleware(true, true, true);

$app->run();