const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: false,
    sameSite: 'none',
};

const LUGGAGE_TYPES = [
    "Hand Luggage",
    "Cabin Luggage",
    "Checked Luggage",
    "Oversized Luggage",
];

const SERVICES = [
    "WIFI",
    "RESTROOM",
    "CCTV"
];

const ROLES = [
    "admin",
    "user",
    "partner"
];

export { COOKIE_OPTIONS, LUGGAGE_TYPES, SERVICES, ROLES };