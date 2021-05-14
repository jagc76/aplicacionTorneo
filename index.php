<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

//Para conexión con la base de datos
function getDB(){
    $dbhost = "localhost"; //Nombre del servidor a conectarse
    $dbname = "torneovoleibol"; //Nombre de la base de datos
    $dbuser = "root"; //Usuario
    $dbpass = ""; //Contraseña
    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname"; //Para conectarme
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass); //Hace la conexión
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Que me añada excepciones y errores
    return $dbConnection;
}
<<<<<<< HEAD
$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Hello world!");
    return $response;
});
//funcion agregar en la tabla empleados.
$app->post('/consultarEquipos', function ($request, $response, $args) {
	try{
		$json = $request->getBody();
		$data = json_decode($json, true);
		$db =  getDB();
		$sth = $db->prepare("SELECT * FROM torneovoleibol.equipos");
		/*$sth = $db->prepare("INSERT INTO empleado (id_empleado, nom_empleado, edad_empleado) VALUES (?,?,?)");
		$sth->execute(array($data['id_emp'], $data['nombre'], $data['edad']));*/

		$response->getBody()->write('{"error":"ok"}');
}catch(PDOException $e){

			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}');
=======
$app->get('/all', function ($request, $response, $args) {  //Defino los servicios
	try{
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("SELECT emNombre, emApellido, emEdad from empleado");//Consulta
		$sth->execute(); //Ejecutamos la consulta
		$test = $sth->fetchAll(PDO::FETCH_ASSOC);//Guardar los resultados de la consulta
//Verificar si se ha cargado algo
		if($test){
			$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
			$db = null;//Cerrar la conexion con la base de datos
		}
else{
			$response->getBody()->write('{"error":"error"}');
		}
	}
catch(PDOException $e){
			$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
>>>>>>> 6929e83fad77e631eba58605272345904594ac21
		}
    return $response
    ->withHeader('Content-Type', 'application/json');
});

$app->addErrorMiddleware(true, true, true);

$app->run();

/*      CONSULTAR
$app->get('/all', function ($request, $response, $args) {  //Defino los servicios
	try{
		$db =  getDB(); //Carga los datos
		$sth = $db->prepare("SELECT emNombre, emApellido, emEdad from empleado");//Consulta
		$sth->execute(); //Ejecutamos la consulta
		$test = $sth->fetchAll(PDO::FETCH_ASSOC);//Guardar los resultados de la consulta
    //Verificar si se ha cargado algo
		if($test){
			$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
			$db = null;//Cerrar la conexion con la base de datos
		}
else{
			$response->getBody()->write('{"error":"error"}');
		}
	}
  catch(PDOException $e){
    $response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}'); //En caso que se halla generado algún error
  }
  return $response
  ->withHeader('Content-Type', 'application/json');
});
*/
