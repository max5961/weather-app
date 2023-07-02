const iconImports = { day: {}, night: {} };
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
// DONE WITH IMPORTS

export async function getWeather(location) {
    Loading.insert();

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${location}&days=7&aqi=no&alerts=yes`, {mode: 'cors'});
        const data = await response.json();

        if (!response.ok) {
            if (data.error.message) {
                throw new Error(data.error.message);
            } else {
                throw new Error('unknown error has occured');
            }
        
        } else {
            console.log(data);
            Loading.remove();
            Populate.current(data);
        }
    } catch(err) {
        console.error(err);
        Loading.remove();
        Error.updateGUI();
    }
}

export class Populate {
    static getIconTime(data) {
        if (data.current.condition.icon.includes('night')) {
            return 'night';
        }

        if (data.current.condition.icon.includes('day')) {
            return 'day';
        }
    }

    static getIconFile(data) {
        const string = data.current.condition.icon;
        return string.substring(string.length - 7);
    }
    
    static current(data) {
        const container = document.createElement('button');
        container.classList.add('content-box');
        
        container.style.height = 'auto';
        container.style.width = '300px';

        const location = document.createElement('p');
        location.textContent = data.location.name;

        const temp = document.createElement('p');
        temp.textContent = `${data.current.temp_f}f`;

        const icon = document.createElement('img');
        icon.classList.add('icon');

        const iconTime = Populate.getIconTime(data);
        const iconFile = Populate.getIconFile(data);
        icon.src = iconImports[iconTime][iconFile];

        container.appendChild(location);
        container.appendChild(temp);
        container.appendChild(icon);

        document.getElementById('main-content').appendChild(container);
    }
}

class Error {
    static updateGUI() {

    }
}

class Loading {
    static insert() {
        const gif = document.createElement('img');
        gif.src = loadingGif;
        document.querySelector('#main-content').appendChild(gif);
    }

    static remove() {
        const mainContent = document.querySelector('#main-content');
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
    }
}
