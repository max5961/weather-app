export class WeatherData {
    constructor(data) {
        this.weather = {US:{}, metric:{}};
    }

    setData(data) {
        const current = this.getCurrent(data);
        const daily = this.getDailyForecast(data);
        const hourly = this.getHourlyForecast(data);

        Object.assign(this.weather, this.getLocation(data));
        Object.assign(this.weather.US, current.US);
        Object.assign(this.weather.US, daily.US);
        Object.assign(this.weather.US, hourly.US);
        Object.assign(this.weather.metric, current.metric);
        Object.assign(this.weather.metric, daily.metric);
        Object.assign(this.weather.metric, hourly.metric);
    }

    getLocation(data) {
        return {
            US: {
                location: {
                    city: data.location.name,
                    region: data.location.region,
                    country: this.formatUSA(data.location.country),
                    localTime: data.location.localtime,
                },
            },
            metric: {
                location: {
                    city: data.location.name,
                    region: data.location.region,
                    country: this.formatUSA(data.location.country),
                    localTime: data.location.localtime,
                },
            }
        }
    }

    getCurrent(data) {
        return {
            US: {
                current: {
                    lastUpdated: data.current.last_updated,
                    condition: data.current.condition.text,
                    icon: this.formatIcon(data.current.condition.icon),
                    rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
                    snowChance: data.forecast.forecastday[0].day.daily_chance_of_snow,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure_in,
                    temp: data.current.temp_f,
                    feelsLike: data.current.feelslike_f,
                    wind: data.current.wind_mph,
                }
            },
            metric: {
                current: {
                    lastUpdated: data.current.last_updated,
                    condition: data.current.condition.text,
                    icon: this.formatIcon(data.current.condition.icon),
                    rainChance: data.forecast.forecastday[0].day.daily_chance_of_rain,
                    snowChance: data.forecast.forecastday[0].day.daily_chance_of_snow,
                    humidity: data.current.humidity,
                    pressure: data.current.pressure_mb,
                    temp: data.current.temp_c,
                    feelsLike: data.current.feelslike_c,
                    wind: data.current.wind_kph,
                }
            }
        }
    }

    getDailyForecast(data) {
        const dailyForecast = { US: {daily:[]}, metric: {daily:[]}};
        for (let i = 0; i < 7; i++) {
            const singleDay = this.setSingleDayForecast(data, i);
            dailyForecast.US.daily.push(singleDay.US);
            dailyForecast.metric.daily.push(singleDay.metric);
        }

        return dailyForecast;
    }

    setSingleDayForecast(data, i) {
        return {
            US: {
                date: data.forecast.forecastday[i].date,
                highTemp: data.forecast.forecastday[i].day.maxtemp_f,
                lowTemp: data.forecast.forecastday[i].day.mintemp_f,
                condition: data.forecast.forecastday[i].day.condition.text,
                icon: this.formatIcon(data.forecast.forecastday[i].day.condition.icon),
            },
            metric: {
                date: data.forecast.forecastday[i].date,
                highTemp: data.forecast.forecastday[i].day.maxtemp_c,
                lowTemp: data.forecast.forecastday[i].day.mintemp_c,
                condition: data.forecast.forecastday[i].day.condition.text,
                icon: this.formatIcon(data.forecast.forecastday[i].day.condition.icon),
            }
        }
    }

    getHourlyForecast(data) {
        const twoDays = { US: {hourly:[]}, metric: {hourly:[]}};
        // gets days 1 and days 2 hourly forecast from fetch data
        for (let i = 0; i < 2; i++) {
            
            twoDays.US.hourly.push([]);
            twoDays.metric.hourly.push([]);

            for (let j = 0; j < 24; j++) {
                const hourData = this.setHour(data, i, j);
                twoDays.US.hourly[i].push(hourData.US);
                twoDays.metric.hourly[i].push(hourData.metric);
            }
        }

        return twoDays;
    }

    setHour(data, i, j) {
        return {
            US: {
                time: data.forecast.forecastday[i].hour[j].time,
                temp: data.forecast.forecastday[i].hour[j].temp_f,
                condition: data.forecast.forecastday[i].hour[j].condition.text,
                icon: this.formatIcon(data.forecast.forecastday[i].hour[j].condition.icon),
            },
            metric: {
                time: data.forecast.forecastday[i].hour[j].time,
                temp: data.forecast.forecastday[i].hour[j].temp_c,
                condition: data.forecast.forecastday[i].hour[j].condition.text,
                icon: this.formatIcon(data.forecast.forecastday[i].hour[j].condition.icon),
            }
        }
    }

    formatIcon(string) {
        if (string.includes('night')) {
            return `night/${sliceString(string)}`;
        }

        if (string.includes('day')) {
            return `day/${sliceString(string)}`;
        }

        function sliceString(string) {
            return string.slice(string.length - 7, string.length);
        }
    }

    getDayNameLong(string) {
        return ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(string).getDay()];
    }
    
    getDayNameShort(string) {
        return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(string).getDay()];
    }

    getMonthName(string) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date(string).getMonth()];
    }

    getDayNumber(string) {
        const number = new Date(string).getDate();
        let suffix = 'th';

        if (number == 1 || number == 21 || number == 31) {
            return number + 'st';
        }
        if (number == 2 || number == 22) {
            return number + 'nd';
        }
        if (number == 3 || number == 23) {
            return number + 'rd';
        }
        else {
            return number + suffix;
        }
    }

    getDayNumberShort(string) {
        const number = new Date(string).getDate();
        if (number > 9) {
            return number.toString();
        }
        if (number < 10) {
            return '0' + number;
        }
    }

    getYearNumber(string) {
        return new Date(string).getFullYear();
    }

    getFormattedDate(string) {
        return `${this.getDayNameLong(string)}, ${this.getMonthName(string)} ${this.getDayNumber(string)}, ${this.getYearNumber(string)}`;
    }

    getLocaleTime(string) {
        const date = new Date(string);
        return date.toLocaleTimeString().slice(0,5) + date.toLocaleTimeString().slice(8,11).toLowerCase();
    }

    formatUSA(string) {
        if (string === 'United States of America') {
            return "USA";
        } else {
            return string;
        }
    }
}

export class Format {
    static formatIcon(string) {
        if (string.includes('night')) {
            return `night/${sliceString(string)}`;
        }

        if (string.includes('day')) {
            return `day/${sliceString(string)}`;
        }

        function sliceString(string) {
            return string.slice(string.length - 7, string.length);
        }
    }

    static getDayNameLong(string) {
        return ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(string).getDay()];
    }
    
    static getDayNameShort(string) {
        return ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(string).getDay()];
    }

    static getMonthName(string) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][new Date(string).getMonth()];
    }

    static getDayNumber(string) {
        const number = new Date(string).getDate();
        let suffix = 'th';

        if (number == 1 || number == 21 || number == 31) {
            return number + 'st';
        }
        if (number == 2 || number == 22) {
            return number + 'nd';
        }
        if (number == 3 || number == 23) {
            return number + 'rd';
        }
        else {
            return number + suffix;
        }
    }

    static getDayNumberShort(string) {
        const number = new Date(string).getDate();
        if (number > 9) {
            return number.toString();
        }
        if (number < 10) {
            return '0' + number;
        }
    }

    static getYearNumber(string) {
        return new Date(string).getFullYear();
    }

    static getFormattedDate(string) {
        return `${this.getDayNameLong(string)}, ${this.getMonthName(string)} ${this.getDayNumber(string)}, ${this.getYearNumber(string)}`;
    }

    static getLocaleTime(string) {
        const date = new Date(string).toLocaleTimeString();
        if (date.length === 11) {
            return date.slice(0,5) + date.slice(9,11).toLowerCase();
        } else {
            return date.slice(0,4) + date.slice(8,10).toLowerCase();
        }
    }

    static formatUSA(string) {
        if (string === 'United States of America') {
            return "USA";
        } else {
            return string;
        }
    }
}

