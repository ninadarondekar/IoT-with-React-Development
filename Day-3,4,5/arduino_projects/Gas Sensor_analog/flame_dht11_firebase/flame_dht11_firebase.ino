#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <DHT.h>

#define WIFI_SSID       "1+ 'NINAD!'"
#define WIFI_PASSWORD   "g3kp2zs2"

#define FIREBASE_HOST   "iot-with-react-878ba-default-rtdb.asia-southeast1.firebasedatabase.app"
#define FIREBASE_AUTH   "NlFffhSUKvL9C3hlHJhCzpcsc23C6Pya7itr6dwn"

#define DHT_PIN     D4
#define DHT_TYPE    DHT11

DHT dht(DHT_PIN, DHT_TYPE);

#define GAS_PIN     A0
#define BUZZER_PIN  D5

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

void setup()
{
    Serial.begin(115200);

    pinMode(BUZZER_PIN, OUTPUT);
    digitalWrite(BUZZER_PIN, LOW);

    dht.begin();

    Serial.println();
    Serial.print("Connecting to WiFi");

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }

    Serial.println();
    Serial.println("WiFi connected!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());

    config.host = FIREBASE_HOST;
    config.signer.tokens.legacy_token = FIREBASE_AUTH;

    Firebase.begin(&config, &auth);
    Firebase.reconnectWiFi(true);

    Serial.println("Firebase initialized.");
}

void loop()
{
    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();
    int gasValue = analogRead(GAS_PIN);

    if (isnan(temperature) || isnan(humidity))
    {
        Serial.println("Failed to read DHT sensor!");
        delay(2000);
        return;
    }

    Serial.println();
    Serial.println("------------- SENSOR DATA -------------");

    Serial.print("Temperature: ");
    Serial.print(temperature);
    Serial.println(" °C");

    Serial.print("Humidity: ");
    Serial.print(humidity);
    Serial.println(" %");

    Serial.print("Gas: ");
    Serial.println(gasValue);

    if (Firebase.setFloat(fbdo, "/Sensor/Temperature", temperature))
    {
        Serial.println("Temperature uploaded.");
    }
    else
    {
        Serial.print("Temperature upload failed: ");
        Serial.println(fbdo.errorReason());
    }

    if (Firebase.setFloat(fbdo, "/Sensor/Humidity", humidity))
    {
        Serial.println("Humidity uploaded.");
    }
    else
    {
        Serial.print("Humidity upload failed: ");
        Serial.println(fbdo.errorReason());
    }

    if (Firebase.setInt(fbdo, "/Sensor/Gas", gasValue))
    {
        Serial.println("Gas value uploaded.");
    }
    else
    {
        Serial.print("Gas upload failed: ");
        Serial.println(fbdo.errorReason());
    }

    if (Firebase.getBool(fbdo, "/Sensor/Buzzer"))
    {
        bool buzzerState = fbdo.boolData();

        Serial.print("Buzzer command: ");

        if (buzzerState)
        {
            Serial.println("ON");
            digitalWrite(BUZZER_PIN, HIGH);
        }
        else
        {
            Serial.println("OFF");
            digitalWrite(BUZZER_PIN, LOW);
        }
    }
    else
    {
        Serial.print("Failed to read Buzzer state: ");
        Serial.println(fbdo.errorReason());
    }

    Serial.println("---------------------------------------");

    delay(5000);
}