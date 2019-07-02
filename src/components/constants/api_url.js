
const location = "Buenos Aires,ar";
const apikey = "43cf678aca102b58f50ae4141e7b3473";
const url_base = "http://api.openweathermap.org/data/2.5/weather";
//&units=metric <- para convertir a la unidad de grados centi
export const api_weather = `${url_base}?q=${location}&appid=${apikey}`;