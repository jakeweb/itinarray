export const VALIDATOR_CONFIG = {
	username: {
        minLength: 3,
        maxLength: 30,
        pattern: ''
    },
    email: {
        minLength: 4,
        maxLength: 30,
        pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    },
    name: {
        minLength: 2,
        maxLength: 30,
        pattern: ''
    },
    city: {
        minLength: 2,
        maxLength: 30,
        pattern: ''
    },
    about: {
        minLength: 1,
        maxLength: 1000,
        pattern: ''
    },
    password: {
        minLength: 6,
        maxLength: 30,
        pattern: ''
    }
}