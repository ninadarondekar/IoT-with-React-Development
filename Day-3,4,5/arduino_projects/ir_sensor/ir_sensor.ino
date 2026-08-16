// C++ code
//
void setup()
{
  pinMode(1, INPUT);
  pinMode(13, OUTPUT);
}

int State = 0;

void loop()
{
  State = digitalRead(1);
  
  if (State == 0) {
    digitalWrite(13, LOW);
  }
  else {
  	digitalWrite(13, HIGH);
  }
}