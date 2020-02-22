const getPuzzle = async (wordCount) => {
    try {
        const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
        if (response.status === 200) {
            const data = await response.json();
            return data.puzzle
        }
    } catch (error) {
        console.log(`An error has taken place${error}`)
        throw Error(`An error has taken place${error}`)
    }
};

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`);
    if (response.status === 200) {
        data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw Error('Unable to fetch  data')
    };
};

const getLocation = async _ => {
    const response = await fetch('http://ipinfo.io/json?token=3f3fbbeac5dedd')
    if (response.status === 200) {
        const data = await response.json();
        return data.country
    } else {
        throw new Error('Unable to fetch data');
    }
};

const getCurrentCountry = async _ => {
    try {
        const location = await getLocation();
        return await getCountry(location);
    } catch (error) {
        throw new Error('Unable to fetch data');
    }
};