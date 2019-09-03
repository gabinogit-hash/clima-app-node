const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eb648947f81e8bea916a1ce8b4a44e3b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}