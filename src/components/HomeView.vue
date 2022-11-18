<template>
    <div>
        <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com/" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kelvin Weather Focus</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>

                    <div class="hidden relative md:block">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input @keyup.enter="search()" v-model="inputData" type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                    </div>

                    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                    </div>
                    <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="grid w-full md:grid-cols-2 mt-14 justify-items-center">

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

            <div class="p-8" v-else>
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
                <a href="#">
                    <img class="rounded-t-lg" src="../img/sunny.jpg" alt="">
                </a>
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

                    this.cityName = data.name;
                    this.countryName    = data.sys.country;
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
