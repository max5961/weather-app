export const iconImports = {};
const dayIcons = ["day/113.png","day/143.png","day/185.png","day/248.png","day/281.png","day/299.png","day/311.png","day/323.png","day/335.png","day/356.png","day/368.png","day/386.png","day/116.png","day/176.png","day/200.png","day/260.png","day/284.png","day/302.png","day/314.png","day/326.png","day/338.png","day/359.png","day/371.png","day/389.png","day/119.png","day/179.png","day/227.png","day/263.png","day/293.png","day/305.png","day/317.png","day/329.png","day/350.png","day/362.png","day/374.png","day/392.png","day/122.png","day/182.png","day/230.png","day/266.png","day/296.png","day/308.png","day/320.png","day/332.png","day/353.png","day/365.png","day/377.png","day/395.png"]
const nightIcons = ["night/113.png","night/143.png","night/185.png","night/248.png","night/281.png","night/299.png","night/311.png","night/323.png","night/335.png","night/356.png","night/368.png","night/386.png","night/116.png","night/176.png","night/200.png","night/260.png","night/284.png","night/302.png","night/314.png","night/326.png","night/338.png","night/359.png","night/371.png","night/389.png","night/119.png","night/179.png","night/227.png","night/263.png","night/293.png","night/305.png","night/317.png","night/329.png","night/350.png","night/362.png","night/374.png","night/392.png","night/122.png","night/182.png","night/230.png","night/266.png","night/296.png","night/308.png","night/320.png","night/332.png","night/353.png","night/365.png","night/377.png","night/395.png"];
// import all weatherAPI icons
[dayIcons, nightIcons].flat().forEach(icon => iconImports[icon] = require(`./media/apiIcons/${icon}`));
// import other icons/images
import downCarrot from '../src/media/down-carrot.svg';
import nightBackground from '../src/media/night-background.jpg';
import dayBackground from '../src/media/background-image3.jpg';
import loadingGif from './media/loading.gif';

//import modules
import { APIkey } from "./APIkey";
import { Build } from './view.js';
import { Format } from './model.js';
import { weatherData, savedLocations } from './index.js';
// DONE WITH IMPORTS

export async function getWeather(location) {
    Load.insertLoadingGIF();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=7&aqi=no&alerts=yes`, {mode: 'cors'});
        const data = await response.json();

        if (!response.ok) {
            HandleResponse.badResponse(data);
        
        } else {
            HandleResponse.resolve(data);
        }
    } catch(err) {
        HandleResponse.error(err);
    }
}

export const Settings = {
    measurement: 'US', // 'US' or 'metric'
    forecast: 'hourly', // 'hourly' or 'daily'
}

export class HandleResponse {
    static resolve(data) {
        Load.removeLoadingGIF();
        HandleResponse.removeErrorMessage();
        Input.handleData(data);
        UI.toggleBackgroundImage(data);
    }

    static error(err) {
        Load.removeLoadingGIF();
        HandleResponse.showErrorMessage(err);
    }

    static badResponse(data) {
        console.error(data.error);

        if (data.error.code == 1006) {
            throw new Error(data.error.message);
            return;
        }
    
        if (data.error.code == 9999) {
            throw new Error(data.error.message);
            return;
        }
    
        throw new Error('Unknown error has occured');
    }

    static showErrorMessage(err) {
        console.error(err);

        let message = err.message;
        if (err.name === 'TypeError') {
            message = 'Unkown error has occured';
        }

        const errorMessage = document.querySelector('form.search p.error-message');
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }

    static removeErrorMessage() {
        const errorMessage = document.querySelector('form.search p.error-message');
        errorMessage.classList.remove('visible');
    }
}

export class Populate {
    static dailyMetric() {
        Load.removeWeather();
        Load.currentWeather(weatherData.weather.metric);
        Load.forecastDaily(weatherData.weather.metric)
    }
    
    static dailyUS() {
        Load.removeWeather();
        Load.currentWeather(weatherData.weather.US);
        Load.forecastDaily(weatherData.weather.US);
    }

    static hourlyMetric() {
        Load.removeWeather();
        Load.currentWeather(weatherData.weather.metric);
        Load.forecastHourly(weatherData.weather.metric);
    }

    static hourlyUS() {
        Load.removeWeather();
        Load.currentWeather(weatherData.weather.US);
        Load.forecastHourly(weatherData.weather.US);
    }

    static clickUS(e) {
        Settings.measurement = 'US';
        UI.updateMeasurementButtons(e);

        if (weatherData.isEmpty()) {
            return;
        } 
        else {
            if (Settings.forecast === 'hourly') {
                Populate.hourlyUS();
                return;
            }
            if (Settings.forecast === 'daily') {
                Populate.dailyUS();
                return;
            }
        }
    }

    static clickMetric(e) {
        Settings.measurement = 'metric';
        UI.updateMeasurementButtons(e);

        if (weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.forecast === 'hourly') {
                Populate.hourlyMetric();
                return;
            }
            if (Settings.forecast === 'daily') {
                Populate.dailyMetric();
                return;
            }
        }
    }

    static clickDaily(e) {
        Settings.forecast = 'daily';
        UI.updateForecastButtons(e);

        if (weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.measurement === 'US') {
                Populate.dailyUS();
                return;
            }
            if (Settings.measurement === 'metric') {
                Populate.dailyMetric();
                return;
            }
        }
    }

    static clickHourly(e) {
        Settings.forecast = 'hourly';
        UI.updateForecastButtons(e);

        if (weatherData.isEmpty()) {
            return;
        }
        else {
            if (Settings.measurement === 'US') {
                Populate.hourlyUS();
                return;
            }
            if (Settings.measurement === 'metric') {
                Populate.hourlyMetric();
                return;
            }
        }
    }
}

export class Load {
    static defaultUI() {
        document.querySelector('#content').appendChild(Build.sidebar());
        Load.insertSavedCities();
        getWeather('02110');
    }

    static removeWeather() {
        const current = document.querySelector('.content-box.current');
        const forecast = document.querySelector('.content-box.forecast');

        if (current) {
            current.remove();
        }
        if (forecast) {
            forecast.remove();
        }
    }

    static insertLoadingGIF() {
        const gif = document.createElement('img');
        gif.classList.add('loading-gif');
        gif.src = loadingGif;
        document.querySelector('#content').appendChild(gif);
    }

    static removeLoadingGIF() {
        document.querySelector('img.loading-gif').remove();
    }

    static currentWeather(data) {
        document.querySelector('#content').appendChild(Build.currentWeather(data));
    }

    static forecastDaily(data) {
        const forecastContainer = Build.forecastContainer();

        const length = data.daily.length;
        for (let i = 0; i < length; i++) {
            // if (i === length - 1) for mobile style
            if (i === length - 1) {
                const lastItem = Build.forecastItemDaily(data.daily[i]);
                lastItem.classList.add('last-item');
                forecastContainer.appendChild(lastItem);
            } else {
                forecastContainer.appendChild(Build.forecastItemDaily(data.daily[i]));
            }
        }

        document.querySelector('#content').appendChild(forecastContainer);
    }

    static forecastHourly(data) {
        // gets exactly 24 hours of forecast data split into hours, so data needs to be grabbed from multiple days
        // get number value in 24 hr time represting current time
        const currentHour = Number(Format.getHour24HR(data.location.localTime));
        // get the hours left in current day's hourly forecast
        const currentDayHours = data.hourly[0].slice(currentHour);
        // get the remaining hours needed to equal 24 total hours from the next day's hourly forecast
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        // forecast container contains 2 main containers for each day
        const forecastContainer = Build.forecastContainer();
        
        // insert data for each hour of day one into day one's container and add day one's container to the forecast container
        const dayOneHourlyDateContainer = Build.hourlyDateContainer(data.daily[0])
        const dayOneContent = createHoursContainer();
        for (let i = 0; i < currentDayHours.length; i++) {
            if (i === currentDayHours.length - 1) {
                const lastItem = Build.forecastItemHourly(currentDayHours[i]);
                lastItem.classList.add('last-item');
                dayOneContent.appendChild(lastItem);
            } else {
                dayOneContent.appendChild(Build.forecastItemHourly(currentDayHours[i]))
            }
        }
        dayOneHourlyDateContainer.appendChild(dayOneContent);
        forecastContainer.appendChild(dayOneHourlyDateContainer);

        // repeat for day two IF there aren't already 24 hours in day 1
        if (currentDayHours.length !== 24) {
            const dayTwoHourlyDateContainer = Build.hourlyDateContainer(data.daily[1]);
            const dayTwoContent = createHoursContainer();
            for (let i = 0; i < nextDayHours.length; i++) {
                if (i === nextDayHours.length - 1) {
                    const lastItem = Build.forecastItemHourly(nextDayHours[i]);
                    lastItem.classList.add('last-item');
                    dayTwoContent.appendChild(lastItem);
                } else {
                    dayTwoContent.appendChild(Build.forecastItemHourly(nextDayHours[i]));
                }
            }
            dayTwoHourlyDateContainer.appendChild(dayTwoContent);
            forecastContainer.appendChild(dayTwoHourlyDateContainer);
        }

        // add the hourly class to the forecast container to separate styling for hourly vs daily forecast
        forecastContainer.classList.add('hourly');

        // insert everything into the document
        document.querySelector('#content').appendChild(forecastContainer);

        function createHoursContainer() {
            const container = document.createElement('div');
            container.classList.add('hours-container');
            return container;
        }
    }

    static insertSavedCities() {
        const citiesContainer = document.querySelector('ul.saved-cities');
        for (const key in savedLocations.data) {
            const city = Build.savedCityItem(key, savedLocations.data);
            citiesContainer.appendChild(city);
        }
    }

    static removeSavedCities() {
        const citiesContainer = document.querySelector('ul.saved-cities');
        while(citiesContainer.firstChild) {
            citiesContainer.removeChild(citiesContainer.firstChild);
        }
    }
}

export class Input {
    static submitLocation(e) {
        e.preventDefault();

        const input = document.querySelector('input#search-location');

        if (input.value.length > 0 ) {
            const location = input.value.trimEnd();
            input.value = "";
            getWeather(location);
        }
    }

    static handleData(data) {
        weatherData.setData(data);

        if (Settings.measurement === 'US') {
            if (Settings.forecast === 'daily') {
                Populate.dailyUS();
                return;
            }
            if (Settings.forecast === 'hourly') {
                Populate.hourlyUS();
                return;
            }
        }

        if (Settings.measurement === 'metric') {
            if (Settings.forecast === 'daily') {
                Populate.dailyMetric();
                return;
            }
            if (Settings.forecast === 'hourly') {
                Populate.hourlyMetric();
                return;
            }
        }
    }
}

export class UI {
    static updateMeasurementButtons(e) {
        const US = document.querySelector('button.settings.us-measurement');
        const metric = document.querySelector('button.settings.metric-measurement');
        [US, metric].forEach(button => button.classList.remove('chosen-setting'));
        e.target.classList.add('chosen-setting');
    }

    static updateForecastButtons(e) {
        const daily = document.querySelector('button.settings.daily-forecast');
        const hourly = document.querySelector('button.settings.hourly-forecast');
        [daily, hourly].forEach(button => button.classList.remove('chosen-setting'));
        e.target.classList.add('chosen-setting');
    }

    static toggleBackgroundImage(data) {
        const content = document.querySelector('#content');
        if (data.current.condition.icon.includes('/night/')) {
            content.style.backgroundImage = `url(${nightBackground})`;
        } else {
            content.style.backgroundImage = `url(${dayBackground})`;
        }
    }

    static expandMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.classList.add('maximized');

        const minimizeButton = document.createElement('button');
        minimizeButton.classList.add('toggle-menu');
        minimizeButton.classList.add('minimize');
        const icon = document.createElement('img');
        icon.src = downCarrot;
        icon.style.transform = 'rotate(180deg)';
        minimizeButton.appendChild(icon);
        minimizeButton.onclick = UI.minimizeMobileSidebar;

        const sidebarContent = document.querySelector('#content .sidebar .content-box');
        sidebarContent.appendChild(minimizeButton);

        const maximizeButtons = document.querySelectorAll('.toggle-menu.maximize');
        maximizeButtons.forEach(btn => btn.remove());
    }

    static minimizeMobileSidebar(e) {
        const sidebar = document.querySelector('#content .sidebar');
        sidebar.classList.remove('maximized');

        const expandButton = document.querySelector('button.toggle-menu');
        expandButton.classList.remove('expanded');
        expandButton.style.height = 'auto';

        const maximizeButton = document.createElement('button');
        maximizeButton.classList.add('toggle-menu');
        maximizeButton.classList.add('maximize');
        const icon = document.createElement('img');
        icon.src = downCarrot;
        maximizeButton.appendChild(icon);
        maximizeButton.onclick = UI.expandMobileSidebar;

        const form = document.querySelector('.sidebar .content-box form.search');
        form.insertAdjacentElement('afterend', maximizeButton);

        const minimizeButton = document.querySelector('.toggle-menu.minimize');
        minimizeButton.remove();
    }

    static saveLocation() {
        savedLocations.saveLocation(weatherData);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }    

    static removeLocation(e) {
        const id = UI.getCityID(e);
        savedLocations.removeLocation(id);
        Load.removeSavedCities();
        Load.insertSavedCities();
    }

    static clickSavedLocation(e) {
        const id = UI.getCityID(e);
        getWeather(savedLocations.data[id]);
    }

    static getCityID(e) {
        let node = e.target;
        while (!node.getAttribute('saved-id')) {
            node = node.parentNode;
        }
        return node.getAttribute('saved-id');
    }
}

