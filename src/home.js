import axios from 'axios';
    export default {
        name : 'HomeView',
        data () {
            return {
                theme      : true,
                inputData  : '',
                countryName: '',
                cityName   : '',
                temperature: '',
                condition  : '',
                lowTemp    : '',
                highTemp   : '',
                feelLike   : '',
                humidity   : '',
                showData   : false,
                apiKey     : 'b6af36398d3c9dd99142e3078377c053',
            }
        },
        methods: {
            search () {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputData}&appid=${this.apiKey}&units=metric`)
                .then(response => {
                    const data = response.data;

                    this.cityName    = data.name;
                    this.countryName = data.sys.country;
                    this.temperature = Math.round(data.main.temp);
                    this.condition   = data.weather[0].description;
                    this.lowTemp     = Math.round(data.main.temp_min);
                    this.highTemp    = Math.round(data.main.temp_max);
                    this.feelLike    = Math.round(data.main.feels_like);
                    this.humidity    = Math.round(data.main.humidity);

                    this.inputData = '';
                    this.showData  = true;
                })
            },
            toggleTheme() {
                this.theme = !this.theme
            }
        }
    }
