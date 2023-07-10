import './style/index.css';
import { getWeather } from './controller.js';
import { Load } from './controller.js';
import { WeatherData } from './model.js';
import { SavedLocations } from './model.js';

export const weatherData = new WeatherData();
export const savedLocations = new SavedLocations();
savedLocations.getStorage();
console.log(savedLocations);

Load.defaultUI();

window.addEventListener('resize', () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (mql.matches) {
        document.querySelector('.sidebar .content-box').scrollTo(0,0);
    }
})




