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

export async function GetAgoraToken(channelName) {
  try {
    const param = JSON.stringify({
      channel: channelName,
    });
    
    const response = await axios
      .post(
        Constants.Configs.Heroku_URL + '/rtctoken',
        param,
        { headers: getHttpHeader('application/json') },
      )
      .catch(err => {
    
        if (err.response?.data?.error) {
          throw {
            code: err.response?.data?.error?.code ?? '',
            message: err.response?.data?.error?.description ?? '',
          };
        }
    
        throw new Error(IMLocalized('ErrorMsgUnknown'));
      });
    
    if (response.data) {
      return { success: true, data: response.data };
    } else {
      return { success: false, err: IMLocalized('InvalidRequest') };
    }

  } catch (e) {
    return { success: false, err: e.message, code: e.code ?? '' };
  }
}