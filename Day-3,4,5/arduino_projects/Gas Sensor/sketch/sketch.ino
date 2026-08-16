void setup() {
  pinMode(8, INPUT);
  pinMode(5, OUTPUT);
  Serial.begin(9600);
}

int isDetected = 0;

void loop() {
  isDetected = digitalRead(8);

  if(!isDetected){
    digitalWrite(5, HIGH);
    Serial.print("Detected! \n");
  }
  else{
    digitalWrite(5, LOW);
    Serial.print("Not Detected! \n");
  }
  delay(10);
}
