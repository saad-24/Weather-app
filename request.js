const key = '886705b4c1182eb1c69f28eb8c520e20';

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;
}