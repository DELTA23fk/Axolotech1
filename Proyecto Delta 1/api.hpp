

const char* ipdelta = "192.168.100.2";
int port = 5000;
const String contentType = "application/x-www-form-urlencoded";
WiFiClient wifi;
//JSON Configuration
char jsonOutput[128];

//JSON para temperatura
StaticJsonDocument<560> temdoc;
JsonObject objecttem = temdoc.to<JsonObject>();
StaticJsonDocument<560> distanceCmdoc;
JsonObject objectdista = distanceCmdoc.to<JsonObject>();
HttpClient client = HttpClient(wifi, ipdelta,port);

//realiza la peticion
String simpleGet(){
  Serial.println("making GET request");
  client.get("/alberca"); // endpoint
  int statusCode = client.responseStatusCode();
  String response = client.responseBody();
  if(statusCode == 200){
    Serial.println("Succes");
  }else{
    Serial.println("Error"); 
  }
  client.stop();
  return response;
}


String iserttemperatura(float valor){
  temdoc["valor"] = valor;
 temdoc["id"] = 1;
  serializeJson(temdoc, jsonOutput);
  Serial.println("making POST request");
  client.post("/datos/", contentType, jsonOutput);
  int statusCode = client.responseStatusCode();
  String response = client.responseBody();
  if(statusCode == 201){
    Serial.println(response);
  }else{
    Serial.println(response);
  }
  client.stop();
  return response;
}
