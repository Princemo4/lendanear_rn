// Regular Expressions
const regexForNames = /^[a-zA-Z]{2,25}$/;
const regexForPhoneNumber = /\d{9}$/;
// eslint-disable-next-line no-useless-escape
const regexForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REGEX = {
  name: regexForNames,
  phone: regexForPhoneNumber,
  email: regexForEmail,
};

// AyncStorage Keys
const KEYS = {
  kLoginUsername: 'LoginUserName',
};

const CONFIGS = {
  AGORA_APP_ID: '182ef16c71a246dab8b32a8e0f4ed0cb',
  AGORA_TOKEN: '006182ef16c71a246dab8b32a8e0f4ed0cbIAAMeuR9wKoA6Na5uRo45eM/SkvUPUxRYUCzNgYKZSLwg6HYMoUAAAAAEABumw/w86NmYQEAAQDyo2Zh',
  Heroku_URL: 'https://lendanear.herokuapp.com'
};

const Constants = {
  regEx: REGEX,
  Keys: KEYS,
  Configs: CONFIGS,
};

export default Constants;