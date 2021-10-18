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
  AGORA_APP_ID: 'b0128a40c78c4a608d6f52d4645c9133',
  Heroku_URL: 'https://lendanear.herokuapp.com'
};

const Constants = {
  regEx: REGEX,
  Keys: KEYS,
  Configs: CONFIGS,
};

export default Constants;