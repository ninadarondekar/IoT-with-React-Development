// C++ code
//
#define trig 8
#define echo 9

float distance = 0;
float duration = 0;


void setup()
{
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  
  Serial.begin(115200);  //96000 is another baud rate but slow 
}

void loop()
{
  //Pulse transmission
  digitalWrite(trig, LOW);
  delayMicroseconds(4);
  
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  
  digitalWrite(trig, LOW);
  
  //Duration
  duration = pulseIn(echo, HIGH);
  
  distance = (0.034 * duration) / 2;
  
  //Print distance
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.print("CM: \n");
  
  delay(5);
}