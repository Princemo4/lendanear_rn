import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function TextInputComp(props) {  
  const iconView = props.iconView;
  const secureEntry = (props.secureTextEntry ?? false);
  const placeholderColor = props.placeholderTextColor ?? 'rgba(255,255,255,0.5)'
  const inputStyle = {...(props.inputStyle ?? {}), ...styles.textInput};
  const newProps = secureEntry ? {...props, secureTextEntry: secureEntry, style: inputStyle, placeholderTextColor: placeholderColor} : {...props, style: inputStyle, placeholderTextColor: placeholderColor};
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
      <TextInput {...newProps}/>
      
    </View>
  );
}