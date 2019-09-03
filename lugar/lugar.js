const axios = require('axios');

const LugarLaLng = async(direccion) => {
    const encodeURl = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURl}`,
        headers: { 'X-Rapidapi-Key': '9e760c07demsh15906c7390b9d6cp16f031jsn70897cdfa808' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro resultado para ${direccion}`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        dir,
        lat,
        lon
    }
}
module.exports = {
    LugarLaLng
}