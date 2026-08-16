void setup() {
  pinMode(A5, INPUT);
  pinMode(5, OUTPUT);
  Serial.begin(9600);
}

int value = 0;

void loop() {

  value = analogRead(A5);
  Serial.print("Gas Level : ");
  Serial.print(value);
  Serial.print("| Status : ");

  if(value >= 500){
    digitalWrite(5, HIGH);
    Serial.print("Detected! \n");
  }
  else{
    digitalWrite(5, LOW);
    Serial.print("Not Detected! \n");
  }
  delay(10);
}
