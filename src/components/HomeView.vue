<template>
    <div>
        <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 pt-5 pb-5">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kelvin Weather Focus</span>
                </a>
                <div class="flex md:order-1 relative">
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg-blur-xl blur"></div>

                    <div class="relative md:block">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input @keyup.enter="search()" v-model="inputData" type="text" id="search-navbar" class="w-[700px] block p-2 pl-10 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                    </div>
                </div>

                <div class="flex md:order-2 text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <div class="ml-3">
                        Dark
                    </div>
                </div>

            </div>
        </nav>

        <div class="grid w-full md:grid-cols-2 mt-20 justify-items-center">

            <div class="border-2 border-white-500 p-8" v-if="showData">
                <p class="text-5xl mt-20 text-white text-center">
                    {{ cityName }}, {{ countryName }}
                </p>
                <p class="text-3xl text-white text-center mt-2">
                    ({{ temperature }} &deg;C)
                </p>

                <ul class="list-disc text-white mt-16 grid w-full md:grid-cols-2">
                    <li>City = {{ cityName }}</li>
                    <li class="ml-10">Country = {{ countryName }}</li>
                    <li>Temperature = {{ temperature }} &deg;C</li>
                    <li class="ml-10">Condition = {{ condition }}</li>
                    <li>Low Temperature = {{ lowTemp }} &deg;C</li>
                    <li class="ml-10">Low Temperature = {{ highTemp }} &deg;C</li>
                    <li>Feels Like = {{ feelLike }} &deg;C</li>
                    <li class="ml-10">Humidity = {{ humidity }} &percnt;</li>
                </ul>

            </div>

            <div class="p-8 animate-slide" v-else>
                <p class="text-4xl mt-28 text-white text-center">
                    Welcome to <span class="border-b-4">Kelvin Weather Focus</span>
                </p>
                <ul class="list-disc text-white mt-12 ml-20">
                    <li>You can search the city's humidity that you want</li>
                    <li>You can know the city's temperature that you want</li>
                    <li>Don't be hesitate. Just search and you can know everything you want</li>
                </ul>
            </div>

            <div class="scale-75 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 duration-300">
                <div v-if="condition.includes('clouds')">
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/cloudy.jpg" alt="">
                    </a>
                </div>

                <div v-else-if="condition.includes('sky')">
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/clear_sky.jpg" alt="">
                    </a>
                </div>

                <div v-else-if="condition.includes('rain')">
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/raining.jpg" alt="">
                    </a>
                </div>

                <div v-else-if="condition.includes('sunny')">
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/sunny.jpg" alt="">
                    </a>
                </div>

                <div v-else-if="condition.includes('snowing')">
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/sunny.jpg" alt="">
                    </a>
                </div>

                <div v-else>
                    <a href="#">
                        <img class="rounded-t-lg" src="../img/weather_focus.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
    export default {
        name : 'HomeView',
        data () {
            return {
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
            }
        }
    }
</script>
