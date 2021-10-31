import React from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { IMLocalized } from '../../core/localization/IMLocalization';
import styles from './Styles';

export default function JoinLoader(props) {
  return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={props.indicatorColor ?? 'white'}/>
        <Text selectable selectionColor='orange' style={styles.text}>
          {IMLocalized('MSG_JOINNING')}
        </Text>
      </View>
  );
}
