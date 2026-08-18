// C++ code
//LED Blink
#define
void setup()
{
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(10, OUTPUT);
}

void loop()
{
  digitalWrite(12, HIGH);
  delay(500); 
  digitalWrite(12, LOW);
  delay(500); 

  digitalWrite(11, HIGH);
  delay(500); 
  digitalWrite(11, LOW);
  delay(500); 

  digitalWrite(10, HIGH);
  delay(500); 
  digitalWrite(10, LOW);
  delay(500); 

}