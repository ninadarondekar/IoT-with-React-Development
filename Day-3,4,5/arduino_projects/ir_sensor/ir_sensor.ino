void setup()
{
  pinMode(12, INPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);   
}

int State = 0;

void loop()
{
  State = digitalRead(12);

  if (State == HIGH)
  {
    digitalWrite(7, LOW);
    digitalWrite(8, LOW);
    noTone(0);
    delay(100);
  }
  else
  {
    digitalWrite(7, HIGH);
    digitalWrite(8, HIGH);
    tone(9, 1000);      
    delay(100);
  }
}