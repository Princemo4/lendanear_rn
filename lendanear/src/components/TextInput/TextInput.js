import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function TextInputComp(props) {  
  const iconView = props.iconView;

  return (
    <View style={[styles.container, props.style ?? {}]}>
      { (iconView == undefined) && (
        <Icon
          name={props.icon ?? 'user'}
          style={styles.icon}
        />
      )}
      { (iconView != undefined) && (
        iconView
      )}
      <TextInput
        placeholder={props.placeholder ?? ''}
        placeholderTextColor={props.textColor ?? 'rgba(255,255,255,0.5)'}
        secureTextEntry={props.secureEntry ?? false}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}