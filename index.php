<?php
use Slim\Factory\AppFactory;

header("Access-Control-Allow-Origin: *");
require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

//Para conexión con la base de datos
function getDB()
{
    $dbhost = "localhost"; //Nombre del servidor a conectarse
    $dbname = "torneovoleibol"; //Nombre de la base de datos
    $dbuser = "root"; //Usuario
    $dbpass = ""; //Contraseña
    $mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname"; //Para conectarme
    $dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass); //Hace la conexión
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Que me añada excepciones y errores
    return $dbConnection;
}

//  SE CONSULTAN LOS GRUPOS DE LA BASE DE DATOS
$app->get('/consultarEquipos/{letraGrupo}', function ($request, $response, $letraGrupo) { //Defino los servicios
    try {
        $db = getDB(); //Carga los datos
        $sth = $db->prepare("SELECT Nombre_Equipo FROM torneovoleibol.equipos WHERE grupo = :letraGrupo;"); //Consulta CONDICIONADA CON WHERE
        $sth->bindParam(":letraGrupo", $letraGrupo["letraGrupo"], PDO::PARAM_STR_CHAR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
        $sth->execute(); //Ejecutamos la consulta
        $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
        //    Verificar si se ha cargado algo
        if ($test) {
            $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
            $db = null; //Cerrar la conexion con la base de datos
        } else {
            $response->getBody()->write('{"error":"error"}');
        }
    } catch (PDOException $e) {
        $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
    }
    return $response
        ->withHeader('Content-Type', 'application/json');
});

//  SE CONSULTAN LOS ENCUENTROS PERO SE RECIBE COMO PARAMETRO LA RONDA, PARA CONSULTAR SOLO LOS ENCUENTROS DE ESA RONDA
$app->get('/consultarEncuentros/{numeroDeEncuentros}', function ($request, $response, $numeroDeEncuentros) { //Defino los servicios
    try {
        $db = getDB(); //Carga los datos
        $sth = $db->prepare("SELECT Cod_Encuentro, Fecha, Cod_Equipo1, Cod_Equipo2 FROM torneovoleibol.encuentro WHERE Cod_Encuentro < :numeroDeEncuentros ORDER BY Fecha;"); //Consulta CONDICIONADA CON WHERE
        $sth->bindParam(":numeroDeEncuentros", $numeroDeEncuentros["numeroDeEncuentros"], PDO::PARAM_INT); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
        $sth->execute(); //Ejecutamos la consulta
        $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
        //    Verificar si se ha cargado algo
        if ($test) {
            $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
            $db = null; //Cerrar la conexion con la base de datos
        } else {
            $response->getBody()->write('{"error":"error"}');
        }
    } catch (PDOException $e) {
        $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
    }
    return $response
        ->withHeader('Content-Type', 'application/json');
});

//  SE CONSULTA LA INFORMACION DEL ENCUENTRO PERO SE RECIBE COMO PARAMETRO EL CODIGO DEL MISMO, PARA CONSULTAR SOLO LA INFO DE ESE ENCUENTRO
$app->get('/consultarInfoEncuentro/{codigoEncuentro}', function ($request, $response, $codigoEncuentro) { //Defino los servicios
    try {
        $db = getDB(); //Carga los datos
        $sth = $db->prepare("SELECT * FROM torneovoleibol.encuentro WHERE Cod_Encuentro = :codigoEncuentro;"); //Consulta CONDICIONADA CON WHERE
        $sth->bindParam(":codigoEncuentro", $codigoEncuentro["codigoEncuentro"], PDO::PARAM_STR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
        $sth->execute(); //Ejecutamos la consulta
        $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
        //    Verificar si se ha cargado algo
        if ($test) {
            $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
            $db = null; //Cerrar la conexion con la base de datos
        } else {
            $response->getBody()->write('{"error":"error"}');
        }
    } catch (PDOException $e) {
        $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
    }
    return $response
        ->withHeader('Content-Type', 'application/json');
});

//  SE CONSULTA LOS NOMBRES DE LOS JUECES DEL ENCUENTRO ENVIANDO COMO PARAMETRO EL ID DE CADA JUEZ
// SE CONSULTA EL NOMBRE DEL JUEZ NUMERO 1
$app->get('/consultarNombreDeJuez1/{idjuez1}', function ($request, $response, $idjuez1) { //Defino los servicios
  try {
      $db = getDB(); //Carga los datos
      $sth = $db->prepare("SELECT Nombre FROM torneovoleibol.jueces where idJuez = :idjuez1;"); //Consulta CONDICIONADA CON WHERE
      $sth->bindParam(":idjuez1", $idjuez1["idjuez1"], PDO::PARAM_STR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
      $sth->execute(); //Ejecutamos la consulta
      $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
      //    Verificar si se ha cargado algo
      if ($test) {
          $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
          $db = null; //Cerrar la conexion con la base de datos
      } else {
          $response->getBody()->write('{"error":"error"}');
      }
  } catch (PDOException $e) {
      $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
  }
  return $response
      ->withHeader('Content-Type', 'application/json');
});

// SE CONSULTA EL NOMBRE DEL JUEZ NUMERO 2
$app->get('/consultarNombreDeJuez2/{idjuez2}', function ($request, $response, $idjuez2) { //Defino los servicios
  try {
      $db = getDB(); //Carga los datos
      $sth = $db->prepare("SELECT Nombre FROM torneovoleibol.jueces where idJuez = :idjuez2;"); //Consulta CONDICIONADA CON WHERE
      $sth->bindParam(":idjuez2", $idjuez2["idjuez2"], PDO::PARAM_STR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
      $sth->execute(); //Ejecutamos la consulta
      $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
      //    Verificar si se ha cargado algo
      if ($test) {
          $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
          $db = null; //Cerrar la conexion con la base de datos
      } else {
          $response->getBody()->write('{"error":"error"}');
      }
  } catch (PDOException $e) {
      $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
  }
  return $response
      ->withHeader('Content-Type', 'application/json');
});

// SE CONSULTA EL NOMBRE DEL JUEZ NUMERO 3
$app->get('/consultarNombreDeJuez3/{idjuez3}', function ($request, $response, $idjuez3) { //Defino los servicios
  try {
      $db = getDB(); //Carga los datos
      $sth = $db->prepare("SELECT Nombre FROM torneovoleibol.jueces where idJuez = :idjuez3;"); //Consulta CONDICIONADA CON WHERE
      $sth->bindParam(":idjuez3", $idjuez3["idjuez3"], PDO::PARAM_STR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
      $sth->execute(); //Ejecutamos la consulta
      $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
      //    Verificar si se ha cargado algo
      if ($test) {
          $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
          $db = null; //Cerrar la conexion con la base de datos
      } else {
          $response->getBody()->write('{"error":"error"}');
      }
  } catch (PDOException $e) {
      $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
  }
  return $response
      ->withHeader('Content-Type', 'application/json');
});

$app->addErrorMiddleware(true, true, true);

$app->run();

//SE CONSULTA JUGADORAS Y PUNTOS DE JUGADORAS PARA SELECCIONAR LAS MEJORES JUGADORAS
$app->get('/consultarNombreJugadora/{Puntos_Anotados}', function ($request, $response, $Puntos_Anotados) { //Defino los servicios
  try {
      $db = getDB(); //Carga los datos
      $sth = $db->prepare("SELECT Nombre FROM torneovoleibol.jugdoras ORDER BY Puntos_Anotados DESC;"); //Consulta CONDICIONADA CON ORDER BY DESC
      $sth->bindParam(":Puntos_Anotados", $Puntos_Anotados["Puntos_Anotados"], PDO::PARAM_STR); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_INT
      $sth->execute(); //Ejecutamos la consulta
      $test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
      //    Verificar si se ha cargado algo
      if ($test) {
          $response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
          $db = null; //Cerrar la conexion con la base de datos
      } else {
          $response->getBody()->write('{"error":"error"}');
      }
  } catch (PDOException $e) {
      $response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
  }
  return $response
      ->withHeader('Content-Type', 'application/json');
});

$app->addErrorMiddleware(true, true, true);

$app->run();

/* //      CONSULTAR SIN WHERE
$app->get('/consultarEquipos', function ($request, $response) { //Defino los servicios
try {
$db = getDB(); //Carga los datos
$sth = $db->prepare("SELECT Nombre_Equipo FROM torneovoleibol.equipos;"); //Consulta
$sth->execute(); //Ejecutamos la consulta
$test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
//    Verificar si se ha cargado algo
if ($test) {
$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
$db = null; //Cerrar la conexion con la base de datos
} else {
$response->getBody()->write('{"error":"error"}');
}
} catch (PDOException $e) {
$response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
}
return $response
->withHeader('Content-Type', 'application/json');
}); */

/* //      CONSULTAR CONDICIONANDO SELECT RECIBIENDO PARAMETROS
$app->get('/consultarEquipos/{parametro}', function ($request, $response, $variableParametro) { //Defino los servicios
try {
$db = getDB(); //Carga los datos
$sth = $db->prepare("SELECT Nombre_Equipo FROM torneovoleibol.equipos WHERE Cod_Equipo = :parametro;"); //Consulta CONDICIONADA CON WHERE
$sth->bindParam(":parametro", $variableParametro["parametro"], PDO::PARAM_INT); //  EL PARAMETRO PUEDE TENER CUALQUIER TIPADO EJEMPLO: PDO::PARAM_STR
$sth->execute(); //Ejecutamos la consulta
$test = $sth->fetchAll(PDO::FETCH_ASSOC); //Guardar los resultados de la consulta
//    Verificar si se ha cargado algo
if ($test) {
$response->getBody()->write(json_encode($test)); //write Escribe la respuesta como texto, pero necesito un Json
$db = null; //Cerrar la conexion con la base de datos
} else {
$response->getBody()->write('{"error":"error"}');
}
} catch (PDOException $e) {
$response->getBody()->write('{"error":{"texto":' . $e->getMessage() . '}}'); //En caso que se halla generado algún error
}
return $response
->withHeader('Content-Type', 'application/json');
}); */

/*  funcion agregar en la tabla empleados.
$app->post('/add', function ($request, $response, $args) {
try{
$json = $request->getBody();
$data = json_decode($json, true);
$db =  getDB();
$sth = $db->prepare("INSERT INTO empleado (id_empleado, nom_empleado, edad_empleado) VALUES (?,?,?)");
$sth->execute(array($data['id_emp'], $data['nombre'], $data['edad']));

$response->getBody()->write('{"error":"ok"}');
}catch(PDOException $e){

$response->getBody()->write('{"error":{"texto":'.$e->getMessage().'}}');
}
return $response
->withHeader('Content-Type', 'application/json');
});*/

/*  consulta por defecto para mostrar mensaje en pantalla
$app->get('/', function (Request $request, Response $response, $args) {
$response->getBody()->write("Hello world!");
return $response;
});*/
