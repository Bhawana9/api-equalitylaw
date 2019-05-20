module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": "current",
        "mocha": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "eslint":"  recommended",
        "SharedArrayBuffer": "readonly"
        
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
       
    ],
    "rules": {
        "no-console": 1,
        "no-unused-vars":"off"
    }
};