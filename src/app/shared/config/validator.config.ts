export const VALIDATOR_CONFIG = {
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
    password: {
        minLength: 6,
        maxLength: 30,
        pattern: ''
    }
}