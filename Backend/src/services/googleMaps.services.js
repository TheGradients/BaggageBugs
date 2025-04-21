import axios from 'axios';

const GOOGLE_MAPS_API_KEY = process.env.GMAP_API_KEY;

const getCoordinates = async (address) => {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address,
            key: GOOGLE_MAPS_API_KEY,
        },
    });
    if (response.data.status !== 'OK') {
        return res.status(400).json({ error: 'Unable to fetch geolocation for the provided address' });
    }
    const locationData = response.data.results[0];
    const geolocation = {
        type: 'Point',
        coordinates: [
            locationData.geometry.location.lng,
            locationData.geometry.location.lat,
        ],
    };
    return geolocation;
};

const getDistanceAndTime = async (origin, destination) => {
    const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
        params: {
            origins: `${origin[1]},${origin[0]}`,
            destinations: `${destination[1]},${destination[0]}`,
            key: GOOGLE_MAPS_API_KEY,
        },
    });
    if (response.data.status !== 'OK') {
        return res.status(400).json({ error: 'Unable to calculate distance and time' });
    }
    const result = response.data.rows[0].elements[0];
    return {
        distance: result.distance.text,
        duration: result.duration.text,
    };
};

export {
    getCoordinates,
    getDistanceAndTime,
};