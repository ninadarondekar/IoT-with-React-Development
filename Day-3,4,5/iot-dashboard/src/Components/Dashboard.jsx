import React from 'react';
import { useState, useEffect } from 'react';
import { database } from '../Firebase';
import { ref, onValue, set } from "firebase/database";
import './Dashboard.css';


const Dashboard = () => {

    const [sensor, setSensor] = useState({
        Temperature: 0,
        Humidity: 0,
        Gas: 0,
        Buzzer: false,
    })

    useEffect(() => {
        const sensorRef = ref(database, "Sensor");

        const unsubscribe = onValue(sensorRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                console.log("Firebase data:", data);

                setSensor({
                    Temperature: data.Temperature || 0,
                    Humidity: data.Humidity || 0,
                    Gas: data.Gas || 0,
                    Buzzer: data.Buzzer || false,
                })
            } else {
                console.log("No data found at sensor")
            }
        })

        return () => unsubscribe();
    }, []);


    const toggleBuzzer = () => {
        const newStatus = !sensor.Buzzer;

        const buzzerRef = ref(database, "Sensor/Buzzer");

        set(buzzerRef, newStatus)
            .then(() => {
                console.log("Buzzer:", newStatus ? "ON" : "OFF");
            })
            .catch((error) => {
                console.log("Error updating buzzer:", error);
            })
    }


    return (
        <div className="dashboard">

            {/* Header */}

            <header className="header">

                <div className="logo">
                    <span className="logo-icon"></span>
                    Smart IoT Dashboard
                </div>

                <nav>
                    <span className="active">Dashboard</span>
                </nav>

            </header>


            {/* Page Title */}

            <div className="page-title">

                <div>
                    <h1>Environmental Monitoring</h1>
                    <p>Real-time sensor data</p>
                </div>

            </div>


            {/* Main Dashboard */}

            <main className="dashboard-grid">


                {/* Temperature */}

                <div className="panel temperature-panel">

                    <div className="panel-header">
                        <span>Temperature</span>
                    </div>

                    <div className="temperature-content">

                        <div className="temperature-circle">
                            <div>
                                <strong>{sensor.Temperature}</strong>
                                <small>°C</small>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Humidity */}

                <div className="panel">

                    <div className="panel-header">
                        <span>Humidity</span>
                    </div>

                    <div className="value-section">

                        <div className="large-value">
                            {sensor.Humidity}
                            <span>%</span>
                        </div>

                        <div className="value-bar">
                            <div
                                className="value-bar-fill humidity-fill"
                                style={{
                                    width: `${Math.min(sensor.Humidity, 100)}%`
                                }}
                            ></div>
                        </div>

                    </div>

                </div>


                {/* Gas */}

                <div className="panel">

                    <div className="panel-header">
                        <span>Gas Level</span>
                    </div>

                    <div className="value-section">

                        <div className="large-value">
                            {sensor.Gas}
                            <span> PPM</span>
                        </div>

                        <div className="value-bar">
                            <div
                                className="value-bar-fill gas-fill"
                                style={{
                                    width: `${Math.min((sensor.Gas / 1000) * 100, 100)}%`
                                }}
                            ></div>
                        </div>

                    </div>

                </div>


                {/* Buzzer */}

                <div className="panel buzzer-panel">

                    <div className="panel-header">
                        <span>Buzzer</span>
                    </div>

                    <div className="buzzer-content">

                        <div className="buzzer-status">
                            <span>Status</span>

                            <strong className={sensor.Buzzer ? "buzzer-on" : "buzzer-off"}>
                                {sensor.Buzzer ? "ON" : "OFF"}
                            </strong>
                        </div>

                        <button
                            className={sensor.Buzzer ? "buzzer-button off" : "buzzer-button"}
                            onClick={toggleBuzzer}
                        >
                            {sensor.Buzzer
                                ? "Turn OFF Buzzer"
                                : "Turn ON Buzzer"}
                        </button>

                    </div>

                </div>


                {/* Sensor Overview */}

                <div className="panel overview-panel">

                    <div className="panel-header">
                        <span>Sensor Overview</span>
                    </div>

                    <div className="overview">

                        <div className="overview-item">

                            <div className="overview-label">
                                <span className="indicator temperature"></span>
                                Temperature
                            </div>

                            <strong>
                                {sensor.Temperature} °C
                            </strong>

                        </div>


                        <div className="overview-item">

                            <div className="overview-label">
                                <span className="indicator humidity"></span>
                                Humidity
                            </div>

                            <strong>
                                {sensor.Humidity} %
                            </strong>

                        </div>


                        <div className="overview-item">

                            <div className="overview-label">
                                <span className="indicator gas"></span>
                                Gas Level
                            </div>

                            <strong>
                                {sensor.Gas} PPM
                            </strong>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Dashboard