import { GetValueForKey, SaveValueWithKey } from './asyncStore';
import Constants from '../../Constants';

export const SaveProfileData = async(username) => {
  await SaveValueWithKey(Constants.Keys.kLoginUsername, username);
}

export const LoadProfileData = async() => {
  const savedProfile = await GetValueForKey(Constants.Keys.kLoginUsername);
  if (savedProfile) {
    return savedProfile
  }

  return null;
}