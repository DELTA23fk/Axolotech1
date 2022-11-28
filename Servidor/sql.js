
let conectarse=require('./server.js')
const sql = require('mysql');  

let conexion;
const date = new Date();

const mes=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let fecha;
let hora;
function registro(){
    conexion = sql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'appalberca'
    }
    );
}

 function  visualizarAlberca(){
 
    registro();
    
    conexion.connect();
    conexion.query('select * from alberca  ',(err,res)=>{
    if( res){
      
        for (const valor of res) {
            let valore={'id':valor.id ,'ancho':valor.ancho,'largo':valor.largo, 'profundidad':valor.profundidad , 'dueno':valor.dueño,'ubicacion':valor.ubicacion};
       conectarse.albercaAgregar(valore,valor.id);
     
        }
       

    }
    else{  console.log(err);} 
});

}

function eliminarAlberca(ind){
 
    registro();
    
    conexion.connect();
    conexion.query(`delete from alberca  where id=${ind}` ,(err,res)=>{
    if( res){
       
      console.log ('se ha borrado con exito');
    }
    else{  console.log(err);} 
});

}

function insertarAlberca(id,ancho,largo,profundidad,dueño,ubicacion){
 
    registro();
    
    conexion.connect();
    conexion.query(`INSERT INTO alberca (id, ancho, largo, profundidad, dueño, ubicacion) VALUES (${id}, ${ancho}, ${largo}, ${profundidad}, '${dueño}', '${ubicacion}')` ,(err,res)=>{
    if( res){
        visualizarAlberca();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});

}


function actualizarAlberca(id,ancho,largo,profundidad,dueño,ubicacion){

    registro();
    
    conexion.connect();
    conexion.query(` UPDATE alberca SET  ancho= ${ancho}, largo=${largo},profundidad= ${profundidad}, dueño='${dueño}', ubicacion='${ubicacion}'where alberca.id=${id}` ,(err,res)=>{
    if( res){
        visualizarAlberca();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});
  
}
//temperatura

   
 function  visualizarTemperatura(){
 
    registro();
    
    conexion.connect();
    conexion.query('select * from temperatura  ',(err,res)=>{
    if( res){
      
        for (const valor of res) {
            let valore={'id':valor.id ,'hora':valor.hora, 'fecha':valor.fecha , 'temperatura':valor.temperatura,'idAlberca':valor.idAlberca};
       conectarse.temperaturaAgregar(valore,valor.id);
     
        }
       

    }
    else{  console.log(err);} 
});

}

function eliminarTemperatura(ind){
 
    registro();
    
    conexion.connect();
    conexion.query(`delete from temperatura  where id=${ind}` ,(err,res)=>{
    if( res){
       
      console.log ('se ha borrado con exito');
    }
    else{  console.log(err);} 
});

}

function insertarTemperatura(id,temperatura,idAlberca){
 
    registro();
    asignarFecha();
    conexion.connect();
    conexion.query(`INSERT INTO temperatura (id, hora, fecha,temperatura, idAlberca) VALUES (${id}, '${hora}', '${fecha}', ${temperatura}, ${idAlberca})` ,(err,res)=>{
    if( res){
        visualizarTemperatura();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});

}


function actualizarTemperatura(id,hora,fecha,temperatura,idAlberca){

    registro();
    
    conexion.connect();
    conexion.query(` UPDATE temperatura SET  hora=${hora},fecha= ${fecha}, temperatura='${temperatura}'where temperatura.id=${id}` ,(err,res)=>{
    if( res){
        visualizarTemperatura();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});
  
}




//nivel agua


function  visualizarNivelAgua(){
 
    registro();
    
    conexion.connect();
    conexion.query('select * from nivelAgua  ',(err,res)=>{
    if( res){
      
        for (const valor of res) {
            let valore={'id':valor.id ,'hora':valor.hora,'fecha':valor.fecha, 'nivel':valor.nivel , 'nivelOptimo':valor.nivelOptimo,'nivelMedio':valor.nivelMedio,'nivelBajo':valor.nivelBajo,'idAlberca':valor.idAlberca};
       conectarse.nivelAguaAgregar(valore,valor.id);
     
        }
       

    }
    else{  console.log(err);} 
});

}

function eliminarNivelAgua(ind){
 
    registro();
    
    conexion.connect();
    conexion.query(`delete from nivelAgua  where id=${ind}` ,(err,res)=>{
    if( res){
       
      console.log ('se ha borrado con exito');
    }
    else{  console.log(err);} 
});

}

function insertarNivelAgua(id,nivel,nivelOptimo,nivelMedio,nivelBajo,idAlberca){
 
    registro();
    asignarFecha();
    conexion.connect();
    conexion.query(`INSERT INTO nivelAgua (id,hora,fecha,nivel,nivelOptimo,nivelMedio,nivelBajo,idAlberca) VALUES (${id}, '${hora}', '${fecha}', ${nivel}, ${nivelOptimo}, ${nivelMedio}, ${nivelBajo}, ${idAlberca})` ,(err,res)=>{
    if( res){
        visualizarNivelAgua();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});

}


function actualizarNivelAgua(id,hora,fecha,nivel,nivelOptimo,nivelMedio,nivelBajo,idAlberca){

    registro();
    
    conexion.connect();
    conexion.query(` UPDATE nivelAgua SET  hora=' ${hora}', fecha='${fecha}',nivel= ${nivel}, nivelOptimo=${nivelOptimo}, nivelMedio=${nivelMedio}, nivelBajo=${nivelBajo} where nivelAgua.id=${id}` ,(err,res)=>{
    if( res){
        visualizarNivelAgua();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});
  
}

    //bomba

    
 function  visualizarBomba(){
 
    registro();
    
    conexion.connect();
    conexion.query('select * from bomba ',(err,res)=>{
    if( res){
      
        for (const valor of res) {
            let valore={'id':valor.id ,'estado':valor.estado,'funcionamiento':valor.funcionamiento, 'idAlberca':valor.idAlberca };
       conectarse.bombaAgregar(valore,valor.id);
     
        }
       

    }
    else{  console.log(err);} 
});

}

function eliminarBomba(ind){
 
    registro();
    
    conexion.connect();
    conexion.query(`delete from bomba  where id=${ind}` ,(err,res)=>{
    if( res){
       
      console.log ('se ha borrado con exito');
    }
    else{  console.log(err);} 
});

}

function insertarBomba(id,estado,funcionamiento,idAlberca){
 
    registro();
    
    conexion.connect();
    conexion.query(`INSERT INTO bomba (id,estado,funcionamiento,idAlberca) VALUES (${id}, '${estado}', '${funcionamiento}', ${idAlberca})` ,(err,res)=>{
    if( res){
        visualizarBomba();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});

}


function actualizarBomba(id,estado,funcionamiento,idAlberca){

    registro();
    
    conexion.connect();
    conexion.query(` UPDATE bomba SET  estado= '${estado}', funcionamiento='${funcionamiento}', idAlberca=${idAlberca} where bomba.id=${id}` ,(err,res)=>{
    if( res){
        visualizarBomba();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});
  
}

    //alarma
    
function  visualizarAlarma(){
 
    registro();
    
    conexion.connect();
    conexion.query('select * from alarma  ',(err,res)=>{
    if( res){
        for (const valor of res) {
            let valore={'id':valor.id ,'hora':valor.hora,'fecha':valor.fecha, 'descripcion':valor.descripcion , 'idAlberca':valor.idAlberca,'idBomba':valor.idBomba,'idNivelAgua':valor.idNivelAgua,'idTemperatura':valor.idTemperatura}
            conectarse.alarmaAgregar(valore,valor.id);
     
        }
       

    }
    else{  console.log(err);} 
});

}
function eliminarAlarma(ind){
 
    registro();
    
    conexion.connect();
    conexion.query(`delete from alarma  where id=${ind}` ,(err,res)=>{
    if( res){
       
      console.log ('se ha borrado con exito');
    }
    else{  console.log(err);} 
});

}

function insertarAlarma(id,descripcion,idAlberca,idBomba,idNivelAgua,idTemperatura){
 
    registro();
    asignarFecha();
    conexion.connect();
    conexion.query(`INSERT INTO alarma (id, hora , fecha , descripcion , idAlberca , idBomba ,idNivelAgua ,idTemperatura) VALUES (${id}, '${hora}', '${fecha}',' ${descripcion}', ${idAlberca}, ${idBomba}, ${idNivelAgua}, ${idTemperatura})` ,(err,res)=>{
    if( res){
        visualizarAlarma();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});

}

function actualizarAlarma(id,hora,fecha,descripcion,idAlberca,idBomba,idNivelAgua,idTemperatura){

    registro();
    
    conexion.connect();
    conexion.query(` UPDATE alarma SET  hora= '${hora}', fecha='${fecha}', descripcion='${descripcion}', idAlberca=${idAlberca}, idBomba=${idBomba}, idNivelAgua=${idNivelAgua}, idTemperatura=${idTemperatura} where alarma.id=${id}` ,(err,res)=>{
    if( res){
        visualizarAlarma();
      console.log ('se ha agregado con exito');
    }
    else{  console.log(err);} 
});
  
}

function asignarFecha(){
   fecha=`${date.getDate()}/${mes[date.getMonth()]}/${date.getFullYear()}`;
   hora=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


//exportados
exports.visualizarAlberca=visualizarAlberca;
exports.actualizarAlberca=actualizarAlberca;
exports.eliminarAlberca=eliminarAlberca;
exports.visualizarTemperatura=visualizarTemperatura;
exports.insertarAlberca=insertarAlberca;
exports.eliminarTemperatura=eliminarTemperatura;
exports.insertarTemperatura=insertarTemperatura;
exports.actualizarTemperatura=insertarTemperatura;
exports.actualizarTemperatura=actualizarTemperatura;
exports.visualizarNivelAgua=visualizarNivelAgua;
exports.actualizarNivelAgua=actualizarNivelAgua;
exports.eliminarNivelAgua=eliminarNivelAgua;
exports.insertarNivelAgua=insertarNivelAgua;
//bomba
exports.visualizarBomba=visualizarBomba;
exports.actualizarBomba=actualizarBomba;
exports.eliminarBomba=eliminarBomba;
exports.insertarBomba=insertarBomba;

//alarma
exports.visualizarAlarma=visualizarAlarma;
exports.actualizarAlarma=actualizarAlarma;
exports.eliminarAlarma=eliminarAlarma;
exports.insertarAlarma=insertarAlarma;


