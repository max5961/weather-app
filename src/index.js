import './style/index.css';
import { Load } from './controller.js';
import { WeatherData, SavedLocations } from './model.js';

export const weatherData = new WeatherData();
export const savedLocations = new SavedLocations();
savedLocations.getStorage();

Load.defaultUI();

window.addEventListener('resize', () => {
    const mql = window.matchMedia('(max-width: 750px)');
    if (mql.matches) {
        document.querySelector('.sidebar .content-box').scrollTo(0,0);
    }
});




