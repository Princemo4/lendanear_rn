import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import Constants from '../../Constants';
import { IMLocalized } from '../localization/IMLocalization';

function getHttpHeader(contentType) {
  let appName = DeviceInfo.getApplicationName();
  let appVersion = DeviceInfo.getVersion();
  let systemVersion = DeviceInfo.getSystemVersion();
  let systemName = DeviceInfo.getSystemName();
  let buildNumber = DeviceInfo.getBuildNumber();
  let bundleId = DeviceInfo.getBundleId();

  const agentHeader =
    appName +
    '/' +
    appVersion +
    ' (' +
    bundleId +
    '; build:' +
    buildNumber +
    ';' +
    systemName +
    ' ' +
    systemVersion +
    ') Axois';
  var httpHeader = {
    'Content-Type': contentType,
    'User-Agent': agentHeader,
  };

  return httpHeader;
}

requestCatchHandler = (err) => {
  if (err.response?.data?.error) {
    throw {
      code: err.response?.data?.error?.code ?? '',
      message: err.response?.data?.error?.description ?? '',
    };
  }

  throw new Error(IMLocalized('ErrorMsgUnknown'));
}

apiResultResponse = (response) => {
  if (response.data) {
    return { success: true, data: response.data };
  } else {
    return { success: false, err: IMLocalized('InvalidRequest') };
  }
}

apiErrorResponse = (e) => {
  return { success: false, err: e.message, code: e.code ?? '' };
}

async function getRequest(url, param = {}, header = { headers: getHttpHeader('application/json') }) {
  console.log('GetRequeset url=', url, param, header);
  try {
    const response = await axios
      .get(
        url,
        param,
        header,
      )
      .catch(err => {
        requestCatchHandler(err);
      });
    
    return apiResultResponse(response);
  } catch (e) {
    return apiErrorResponse(e);
  }
}

async function postRequest(url, param = {}, header = { headers: getHttpHeader('application/json') }) {
  console.log('PostRequeset url=', url, param, header);
  try {
    const response = await axios
      .post(
        url,
        param,
        header,
      )
      .catch(err => {
        requestCatchHandler(err);
      });
    
    return apiResultResponse(response);
  } catch (e) {
    return apiErrorResponse(e);
  }
}

export async function GetAgoraToken(channelName,agoraUid) {
  const param = JSON.stringify({
    channel: channelName,
    agoraUid: agoraUid
  });

  return await postRequest(Constants.Configs.Heroku_URL + '/rtctoken', param);
}

export async function GetUserFromAgoraUid(agoraUid) {
  return await getRequest(Constants.Configs.Heroku_URL + '/users/agoraUid/' + agoraUid);
}

export async function CreateAccount(email, pwd, firstName, lastName, screenName) {
  const param = JSON.stringify({
    email: email,
    firstName: firstName,
    lastName: lastName,
    screenName: screenName,
    password: pwd,
  });

  return await postRequest(Constants.Configs.Heroku_URL + '/users', param);
}