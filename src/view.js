import { iconImports } from "./controller.js";
import { Input } from "./controller.js";
import { WeatherData } from "./model.js";
import { Format } from "./model.js";

class Element {
    constructor(
        config = {
            'tagname':'div',
        }
    ) {
        this.config = config;
    }

    build() {
        //new Element().build() will default to a created div element
        //if a config object is passed in as a parameter, then a tagname property always needs to be added
        const element = document.createElement(this.config['tagname']);
        
        for (const property in this.config) {
            if (property === 'class') {
                // allow multiple classnames in single declaration
                const classNames = this.config['class'].split(' ');

                if (classNames.length === 1) {
                    element.classList.add(this.config['class']);
                } else {
                    for (const className of classNames) {
                        element.classList.add(className);
                    }
                }
            }
            else if (property === 'id') {
                element.setAttribute('id', this.config['id']);
            }
            else if (property === 'text-content') {
                element.textContent = this.config['text-content'];
            }
            else if (property === 'event-listeners') {
                for (const property in this.config['event-listeners']){
                    element.addEventListener(property, this.config['event-listeners'][property]);
                }
            }
            else if (property === 'src') {
                element.src = this.config['src'];
            }
            //child must be built using this.build()
            else if (property === 'children') {
                for(const child of this.config['children']){
                    element.appendChild(child);
                }
            }
            else if (property === 'style') {
                for(const property in this.config['style']){
                    element.style[property] = this.config['style'][property];
                }
            }
            else if (property !== 'tagname') {
                element.setAttribute(property, this.config[property]);
            }
        }

        return element;
    }
}

export class Build {
    static sidebar() {
        return new Element({
            'tagname': 'div',
            'class': 'sidebar',
            'children': [
                new Element({
                    'tagname': 'div',
                    'class': 'content-box',
                    'children': [
                        new Element({
                            'tagname': 'form',
                            'class': 'search',
                            'event-listeners':{'submit':Input.submitLocation},
                            'children': [
                                new Element({
                                    'tagname': 'input',
                                    'type': 'text',
                                    'name': 'search-location',
                                    'id': 'search-location',
                                    'placeholder': 'zip code or city',
                                    'autofocus': 'true',
                                }).build(),
                                new Element({
                                    'tagname': 'button',
                                    'type': 'submit',
                                    'children': [
                                        new Element({
                                            'tagname': 'img',
                                            'class': 'search-icon',
                                            'src': '../src/media/search.svg',
                                            'alt': 'search-icon',
                                        }).build(),
                                    ],
                                }).build(),
                                new Element({
                                    'tagname': 'p',
                                    'class': 'error-message',
                                    'text-content': 'No matching location found.',
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'button',
                            'class': 'expand-menu',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/down-carrot.svg',
                                    'alt': 'expand-menu',
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'h2',
                            'text-content': 'Settings',
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'settings-content',
                            'children': [
                                new Element({
                                    'tagname': 'h4',
                                    'text-content': 'Measurement',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'toggle-container measurement',
                                    'children': [
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'Metric',
                                        }).build(),
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'US',
                                        }).build(),
                                    ],
                                }).build(),
                                new Element({
                                    'tagname': 'h4',
                                    'text-content': 'Information',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'toggle-container forecast-hourly',
                                    'children': [
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': '7 day forecast',
                                        }).build(),
                                        new Element({
                                            'tagname': 'button',
                                            'text-content': 'Hourly',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'h2',
                            'text-content': 'Saved Locations',
                        }).build(),
                        new Element({
                            'tagname': 'ul',
                            'class': 'saved-cities',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static savedCityItem() {
        return new Element({
            'tagname': 'li',
            'class': 'city-name',
            'children': [
                new Element({
                    'tagname': 'button',
                    'class': 'left-container',
                    'children': [
                        new Element({
                            'tagname': 'h3',
                            'text-content': 'Boston',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'region',
                            'text-content': 'Massachusetts, USA',
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'button',
                    'class': 'delete',
                    'city-object-id': '12345',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'delete',
                            'src': '../src/media/delete.svg',
                            'alt': '',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static currentWeather(data) {
        return new Element({
            'tagname': 'div',
            'class': 'content-box current',
            'children': [
                new Element({
                    'tagname': 'div',
                    'class': 'city-region-container',
                    'children': [
                        new Element({
                            'tagname': 'h2',
                            'class': 'city',
                            'text-content': `${data.location.city}`,
                        }).build(),
                        new Element({
                            'tagname': 'h5',
                            'class': 'region',
                            'text-content': `${data.location.region}, ${data.location.country}`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'time-date-container',
                    'children': [
                        new Element({
                            'tagname': 'p',
                            'class': 'time',
                            'children': [
                                new Element({
                                    'tagname': 'span',
                                    'text-content': 'as of',
                                }).build(),
                                new Element({
                                    'tagname': 'span',
                                    'text-content': Format.getLocaleTime(data.current.lastUpdated),
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'date',
                            'text-content': 'Sunday, July 2nd 2023',
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'p',
                    'class': 'temp',
                    'text-content': '69.1 \u00B0F',
                    'text-content': `${data.current.temp} \u00B0F`
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'src': iconImports[data.current.icon],
                            'alt': 'weather-icon',
                            'class': 'condition-icon icon',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': `${data.current.condition}`,
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'weather-properties',
                    'children': [
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property feels-like',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/thermometer.svg',
                                    'alt': 'wind',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Feels like',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '70 &degF',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property wind',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/wind.svg',
                                    'alt': 'wind',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Wind',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '20 mph',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property chance-rain',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/rain.svg',
                                    'alt': 'rain',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Rain',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '20%',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property chance-snow',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/snow.svg',
                                    'alt': 'snow',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Snow:',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '0%',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property humidity',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/humidity.svg',
                                    'alt': 'humidity',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Humidity',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '63%',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                        new Element({
                            'tagname': 'div',
                            'class': 'weather-property pressure',
                            'children': [
                                new Element({
                                    'tagname': 'img',
                                    'src': '../src/media/pressure.svg',
                                    'alt': 'pressure',
                                }).build(),
                                new Element({
                                    'tagname': 'div',
                                    'class': 'right-content',
                                    'children': [
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'text',
                                            'text-content': 'Wind',
                                        }).build(),
                                        new Element({
                                            'tagname': 'p',
                                            'class': 'value',
                                            'text-content': '29.86 in',
                                        }).build(),
                                    ],
                                }).build(),
                            ],
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static forecastContainer() {
        return new Element({
            'tagname': 'div',
            'class': 'content-box forecast',
        }).build();
    }

    static forecastItemDaily() {
        return new Element({
            'tagname': 'div',
            'class': 'forecast-item daily-item',
            'children': [
                new Element({
                    'tagname': 'h3',
                    'text-content': 'Mon 03',
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'high-low-container',
                    'children': [
                        new Element({
                            'tagname': 'span',
                            'class': 'high-temp',
                            'text-content': '80 °',
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'divider',
                            'text-content': '/',
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'low-temp',
                            'text-content': '65 °',
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'condition icon',
                            'src': '../src/media/apiIcons/day/113.png',
                            'alt': '',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': 'Partly cloudy',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static forecastItemHourly() {
        return new Element({
            'tagname': 'div',
            'class': 'forecast-item hourly-item',
            'children': [
                new Element({
                    'tagname': 'h3',
                    'text-content': '1 am',
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'high-low-container',
                    'children': [
                        new Element({
                            'tagname': 'span',
                            'class': 'high-temp',
                            'text-content': '80 °',
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'divider',
                            'text-content': '/',
                        }).build(),
                        new Element({
                            'tagname': 'span',
                            'class': 'low-temp',
                            'text-content': '65 °',
                        }).build(),
                    ],
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'condition-container',
                    'children': [
                        new Element({
                            'tagname': 'img',
                            'class': 'condition icon',
                            'src': '../src/media/apiIcons/day/113.png',
                            'alt': '',
                        }).build(),
                        new Element({
                            'tagname': 'p',
                            'class': 'condition',
                            'text-content': 'Partly cloudy',
                        }).build(),
                    ],
                }).build(),
            ],
        }).build();
    }

    static hourlyDateContainer() {
        // to be appended inside of .content-box.forecast
        return new Element({
            'tagname': 'div',
            'class': 'hourly-date-container',
            'children': [
                new Element({
                    'tagname': 'p',
                    'class': 'date',
                    'text-content': 'Tuesday, July 4',
                }).build(),
                new Element({
                    'tagname': 'div',
                    'class': 'hours-container',
                    // .forecast-item.hourly-item to be appended inside of .hours-container
                }).build(),
            ],
        }).build();
    }
}