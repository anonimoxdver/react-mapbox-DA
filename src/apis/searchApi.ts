import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGF2aWR4ZGRkIiwiYSI6ImNsMHI1emw5aTAwY2czbHAyaTVld204NDYifQ.wL7yBuY9FiyK5nRWYwqMIA'
    }
})


export default searchApi;