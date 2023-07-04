export const iconImports = {};
const dayIcons = ["day/113.png","day/143.png","day/185.png","day/248.png","day/281.png","day/299.png","day/311.png","day/323.png","day/335.png","day/356.png","day/368.png","day/386.png","day/116.png","day/176.png","day/200.png","day/260.png","day/284.png","day/302.png","day/314.png","day/326.png","day/338.png","day/359.png","day/371.png","day/389.png","day/119.png","day/179.png","day/227.png","day/263.png","day/293.png","day/305.png","day/317.png","day/329.png","day/350.png","day/362.png","day/374.png","day/392.png","day/122.png","day/182.png","day/230.png","day/266.png","day/296.png","day/308.png","day/320.png","day/332.png","day/353.png","day/365.png","day/377.png","day/395.png"]
const nightIcons = ["night/113.png","night/143.png","night/185.png","night/248.png","night/281.png","night/299.png","night/311.png","night/323.png","night/335.png","night/356.png","night/368.png","night/386.png","night/116.png","night/176.png","night/200.png","night/260.png","night/284.png","night/302.png","night/314.png","night/326.png","night/338.png","night/359.png","night/371.png","night/389.png","night/119.png","night/179.png","night/227.png","night/263.png","night/293.png","night/305.png","night/317.png","night/329.png","night/350.png","night/362.png","night/374.png","night/392.png","night/122.png","night/182.png","night/230.png","night/266.png","night/296.png","night/308.png","night/320.png","night/332.png","night/353.png","night/365.png","night/377.png","night/395.png"];
// import all icons
[dayIcons, nightIcons].flat().forEach(icon => iconImports[icon] = require(`./media/apiIcons/${icon}`));

import { APIkey } from "./APIkey";
import { WeatherData } from "./model.js";
import loadingGif from './media/loading.gif'
import { Build } from './view.js' 
import { Format } from './model.js';
// DONE WITH IMPORTS

export async function getWeather(location) {
    Move.removeWeather();
    Load.insertLoadingGIF();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=7&aqi=no&alerts=yes`, {mode: 'cors'});
        const data = await response.json();

        if (!response.ok) {
            if (data.error.message) {
                throw new Error(data.error.message);
            } else {
                throw new Error(' unknown error has occured');
            }
        
        } else {
            Load.removeLoadingGIF();
            console.log(data);
            const weatherData = new WeatherData();
            weatherData.setData(data);
            console.log(weatherData.weather.US);
            Populate.hourlyUS(weatherData.weather);
        }
    } catch(err) {
        console.log(err.message);
        Load.removeLoadingGIF();
        // ErrorMessage.updateGUI();
    }
}

export class Move {
    static removeWeather() {
        const currentWeather = document.querySelector('.content-box.current');
        const forecastWeather = document.querySelector('.content-box.forecast');
        if (currentWeather) {
            currentWeather.remove();
        }
        if (forecastWeather) {
            forecastWeather.remove();
        }
    }
}

export class Populate {
    static dailyMetric(data) {
        Load.removeContent();
        Load.currentWeather(data.metric);
        Load.forecastDaily(data.metric)
    }
    
    static dailyUS(data) {
        Load.removeContent();
        Load.currentWeather(data.US);
        Load.forecastDaily(data.US);
    }

    static hourlyMetric(data) {
        Load.removeContent();
        Load.currentWeather(data.metric);
        Load.forecastHourly(data.metric);
    }

    static hourlyUS(data) {
        Load.removeContent();
        Load.currentWeather(data.US);
        Load.forecastHourly(data.US);
    }
}

export class Load {
    static removeContent() {
        const current = document.querySelector('.content-box.current');
        const forecast = document.querySelector('.content-box.forecast');

        if (current) {
            current.remove();
        }
        if (forecast) {
            forecast.remove();
        }
    }
    static defaultUI() {
        const content = document.querySelector('#content');
        [
            Build.sidebar(),
            // Build.currentWeather(),
            // Build.forecastContainer(),
        ]
        .forEach(container => content.appendChild(container));
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
        for (let i = 0; i < 7; i++) {
            forecastContainer.appendChild(Build.forecastItemDaily(data.daily[i]));
        }

        document.querySelector('#content').appendChild(forecastContainer);
    }

    static forecastHourly(data) {
        const currentHour = Number(Format.getHour24HR(data.location.localTime));
        const currentDayHours = data.hourly[0].slice(currentHour);
        const nextDayHours = data.hourly[1].slice(0, data.hourly[1].length - currentDayHours.length);
        
        const forecastContainer = Build.forecastContainer();
        
        const dayOneHourlyDateContainer = Build.hourlyDateContainer(data.daily[0])
        const dayOneContent = createHoursContainer();
        for (let i = 0; i < currentDayHours.length; i++) {
            dayOneContent.appendChild(Build.forecastItemHourly(currentDayHours[i]))
        }
        dayOneHourlyDateContainer.appendChild(dayOneContent);
        forecastContainer.appendChild(dayOneHourlyDateContainer);

        const dayTwoHourlyDateContainer = Build.hourlyDateContainer(data.daily[1]);
        const dayTwoContent = createHoursContainer();
        for (let i = 0; i < nextDayHours.length; i++) {
            dayTwoContent.appendChild(Build.forecastItemHourly(nextDayHours[i]));
        }
        dayTwoHourlyDateContainer.appendChild(dayTwoContent);
        forecastContainer.appendChild(dayTwoHourlyDateContainer);

        document.querySelector('#content').appendChild(forecastContainer);


        function createHoursContainer() {
            const container = document.createElement('div');
            container.classList.add('hours-container');
            return container;
        }
    }
}

class HandleError {

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
}

