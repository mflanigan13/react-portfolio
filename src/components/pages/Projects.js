import React from 'react';

export default function Projects() {
    return (
        <div>
            <h1 class="display-1">Projects Page</h1>
            <div class="card-columns">
                <div class="card">
                    <img src="/images/budget-tracker.png"  width={300} alt="budget-tracker" />
                    <div class="card-body">
                        <h3 class="card-title">Budget Tracker</h3>
                        <p class="card-text">A Budget Tracker application that allows users to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.</p>
                        <div class="btn-wrapper">
                            <a href="https://github.com/mflanigan13/pwa-budget-tracker" class="btn btn-primary">GitHub</a>
                            <a href="https://pwa-budget-tracker-13.herokuapp.com/" class="btn btn-primary">Deployment</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/e-commerce.jpg" width={300} alt="e-commerce backend" />
                        <div class="card-body">
                            <h3 class="card-title">E-Commerce Back End</h3>
                            <p class="card-text">This project is the creation of the back end for an e-commerce site.</p>
                            <a href="https://github.com/mflanigan13/e-commerce-back-end" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/11-express-homework-demo-01.png" width={300} alt="Note Taker" />
                        <div class="card-body">
                            <h3 class="card-title">Note Taker</h3>
                            <p class="card-text">This is a simple Note Taker application that allows users to add notes, view saved notes and also delete the notes. This application uses an express backend, as well as a save and retrieve note data from a JSON file.</p>
                            <a href="https://github.com/mflanigan13/note-taker-express" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/team-profile-page.png" width={300} alt="Team Profile Generator" />
                        <div class="card-body">
                            <h3 class="card-title">Team Profile Generator</h3>
                            <p class="card-text">This application was created to generate a team profile based on user input using the Inquirer module from Node.js and display the information on a newly created html page with a style sheet. This project demonstrates use of OOP and TDD using Jest.</p>
                            <a href="https://github.com/mflanigan13/team-profile-generator" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/images/weather-db.png" width={300} alt="Weather Dashboard" />
                        <div class="card-body">
                            <h3 class="card-title">Weather Dashboard</h3>
                            <p class="card-text">This application is a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. It will use the API, OpenWeather, to retrieve weather data for cities.</p>
                            <a href="https://github.com/mflanigan13/weather-dashboard" class="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}