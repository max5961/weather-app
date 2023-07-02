export class HandleData {
    constructor(data) {
        this.data = {};
    }

    setData(value) {
        this.data = value;
    }

    getLocation() {
        return  {
            location: {
                city: this.data.location.name,
                region: this.data.location.region,
                country: this.data.location.country,
            }
        }
    }

    getCurrent() {
        return {
            condition: this.data.current.condition.text,
            icon: this.data.current.condition.icon,
            temp_f: this.data.current.condition.temp_f,
            feelsLike_f: this.data.current.condition.feelsLike_f,
            wind_mph: this.data.current.condition.wind_mph,
            pressure_in: this.data.current.condition.pressure_in,
        }
    }

    getForecast() {
        return {
            forecast: {

            }
        }
    }
}