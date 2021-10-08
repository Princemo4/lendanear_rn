import AsyncStorage from '@react-native-community/async-storage';

export const SaveValueWithKey = async (key, val) => {
  try {
    await AsyncStorage.setItem('@LendanerStore:' + key, val);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

export const GetValueForKey = async (key) => {
  let savedValue = null;
  try {
    savedValue = (await AsyncStorage.getItem('@LendanerStore:' + key)) || '';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return savedValue;
};