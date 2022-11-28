
//Constantes
//Ultrasonico
const int trinPin =4;
const int echoPin =5;
//Leds y Buzzer
const int ledrojo =33;
const int ledazul =25;
const int ledverde =32;
const int buzzer =19;
//Bombas
const int bombll = 15;
const int dre = 23;
//Botones
const int bot1 =13;
const int bot2 =12;

//Librerias
//Wifi
#include <WiFi.h>
#include <HTTPClient.h>
//Sesnor temperatura y ultrasonico
#include <SPI.h>
#include <Wire.h>
#include <OneWire.h> 
#include <DallasTemperature.h>
//Pantalla LCD
#include <LiquidCrystal_I2C.h>
#include <ArduinoJson.h>
#include <ArduinoHttpClient.h>
  



//Utrasonico
#define SOUND_SPEED 0.034
#define CM_TO_INCH 0.393701


#include "conexion.hpp"
#include "api.hpp"
//Pantantalla LCD
int lcdColumns = 16;
int lcdRows = 2;

//Declaracion Temperatura
OneWire ourWire(14);

//Parte de las librerias
//Patanalla LCD
LiquidCrystal_I2C lcd(0x27, lcdColumns, lcdRows);  
//Temperatura
DallasTemperature DS18B20(&ourWire);


//Decalracion distancia
long duration;
float distanceCm;
float distanceInch;

//Setup
void setup() {
  //Inicia puerto serial
  Serial.begin(115200);
  //Inicia Pantalla LCD
  lcd.init();
  lcd.backlight();

  //Inicia protocolo WIFI
  Serial.print("Conectando a ");
  Serial.println(ssid);
  lcd.setCursor(0, 0);
  lcd.print("Conectando a"); 
  lcd.setCursor(0, 1);
  lcd.print(ssid);

  
  //WiFiServer server(80);
  
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  unsigned long startAttemptTime = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - startAttemptTime < timeout) {
    delay(200);
    Serial.print(".");
  }
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("Fallo al conectar");
    lcd.setCursor(0, 1);
    lcd.print("Fallo al conectar"); 
   
  } else {
    Serial.println("Conectado a red Wifi");
    lcd.setCursor(0, 0);
    lcd.print("Conectado a red Wifi"); 
    
    Serial.println(WiFi.localIP());
    lcd.setCursor(0, 1);
    lcd.print(WiFi.localIP()); 
    
  }


  DS18B20.begin();
  
  pinMode(trinPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledrojo, OUTPUT); 
  pinMode(ledazul, OUTPUT);
  pinMode(ledverde, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(bombll, OUTPUT);
  pinMode(dre, OUTPUT);
  pinMode(bot1, INPUT);
  pinMode(bot2, INPUT);

  digitalWrite(bombll, LOW);

  

}

void loop() {
  //Configuracion Temp
  
  DS18B20.requestTemperatures();
  float tem= DS18B20.getTempCByIndex(0);

     // http.begin(client, serverName);

  //Configuracion Ultrasonico
  digitalWrite(trinPin, LOW);
  delay(1000);
  digitalWrite(trinPin, HIGH);
  delay(1000);
  digitalWrite(trinPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distanceCm = duration *SOUND_SPEED/2;
  distanceInch = distanceCm * CM_TO_INCH;


  //Funcion principal
  
  if (distanceCm>1 && distanceCm<4.20){
    digitalWrite (ledrojo, LOW);
    digitalWrite (ledazul, LOW);
    digitalWrite (ledverde, HIGH);
    digitalWrite (buzzer, LOW);
    digitalWrite (bombll, LOW);
    lcd.setCursor(0, 0); 
    lcd.print(" Alberca Llena");
    
    
  }else if(distanceCm>4.21 && distanceCm<5.20){
    digitalWrite (ledrojo, LOW);
    digitalWrite (ledazul, HIGH);
    digitalWrite (ledverde, LOW);
    digitalWrite (buzzer, LOW);
    digitalWrite (bombll, HIGH);
    lcd.setCursor(0,0);
    lcd.print("Alberca casi llena");  
    

  }else if(distanceCm>7.60 && distanceCm<13.99){
    digitalWrite (ledrojo, HIGH);
    digitalWrite (ledazul, LOW);
    digitalWrite (ledverde, LOW);
    digitalWrite (buzzer, HIGH);
    digitalWrite (bombll, HIGH);
    lcd.setCursor(0,0);
    lcd.print("  Alberca vacia  ");  
     

  }else if(distanceCm>14 && distanceCm<2200){
    digitalWrite (ledrojo, HIGH);
    digitalWrite (ledazul, HIGH);
    digitalWrite (ledverde, LOW);
    digitalWrite (buzzer, HIGH);
    digitalWrite (bombll, LOW);
    lcd.setCursor(0,0);
    lcd.print("Fuera de rango   ");  

  }

  Serial.print("Distancia(cm):");
  Serial.println(distanceCm);
  
  
  Serial.print("Temperatura= ");
  Serial.print(tem);
  Serial.println(" °C");

  lcd.setCursor(0,1);
  lcd.print("  Temp:"); 
  lcd.print(tem);  


  
  delay(1000);
  
}

