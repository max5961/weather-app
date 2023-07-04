export const iconImports = { day: {}, night: {} };
const dayIcons = ['113.png', '143.png', '185.png', '248.png', '281.png', '299.png', '311.png', '323.png', '335.png', '356.png', '368.png', '386.png', '116.png', '176.png', '200.png', '260.png', '284.png', '302.png', '314.png', '326.png', '338.png', '359.png', '371.png', '389.png', '119.png', '179.png', '227.png', '263.png', '293.png', '305.png', '317.png', '329.png', '350.png', '362.png', '374.png', '392.png', '122.png', '182.png', '230.png', '266.png', '296.png', '308.png', '320.png', '332.png', '353.png', '365.png', '377.png', '395.png'];
const nightIcons = ['113.png', '143.png', '185.png', '248.png', '281.png', '299.png', '311.png', '323.png', '335.png', '356.png', '368.png', '386.png', '116.png', '176.png', '200.png', '260.png', '284.png', '302.png', '314.png', '326.png', '338.png', '359.png', '371.png', '389.png', '119.png', '179.png', '227.png', '263.png', '293.png', '305.png', '317.png', '329.png', '350.png', '362.png', '374.png', '392.png', '122.png', '182.png', '230.png', '266.png', '296.png', '308.png', '320.png', '332.png', '353.png', '365.png', '377.png', '395.png'];
dayIcons.forEach(icon => {
    iconImports.day[icon] = require(`./media/apiIcons/day/${icon}`);
})
nightIcons.forEach(icon => {
    iconImports.night[icon] = require(`./media/apiIcons/night/${icon}`);
})
import { APIkey } from "./APIkey";
import loadingGif from './media/loading.gif'
import { Build } from './view.js' 
// DONE WITH IMPORTS

export async function getWeather(location) {
    Populate.insertLoadingGIF();

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
            // response was okay
            Populate.removeLoadingGIF();
            console.log(data);
        }
    } catch(err) {
        console.log(err.message);
        Populate.removeLoadingGIF();
        // ErrorMessage.updateGUI();
    }
}

export class Populate {
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

