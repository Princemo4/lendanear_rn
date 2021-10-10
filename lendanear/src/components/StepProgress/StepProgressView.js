import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function StepProgressView(props) {  
  const stepIndex = props.index ?? 0;
  const stepCount = props.steps ?? 3;
  const stepLabels = props.labels ?? [
    "Your Info",
    "Verify Email",
    "Hide your Identity"
  ]
  const stepDescs = [
    "", "We sent you an email with your verification code", "The community will only know you by this name"
  ]
  var viewContents = [];
  for (let i = 0; i < stepCount; i++) {
    if (i == stepIndex) {
      viewContents.push(
        <EntypoIcon 
          name="time-slot" 
          style={[styles.iconProgress, styles.iconActive]}
        />
      )
    } else if (i < stepIndex) {
      viewContents.push(
        <IoniconsIcon
          name="md-checkmark-circle"
          style={[styles.iconChecked, styles.iconActive]}
        />
      )
    } else {
      viewContents.push(
        <FontAwesomeIcon
          name="circle"
          style={[styles.iconEmpty]}
        />
      )
    }
    
    if (i != stepCount - 1) {
      if (i >= stepIndex) {
        viewContents.push(
          <View style={[styles.connectorLine]}/>
        )
      } else {
        viewContents.push(
          <View style={[styles.connectorLine, styles.connectorActive]}/>
        )
      }
    }
  }
  const stepLabelText = 'STEP' + (stepIndex + 1) + ': ' + stepLabels[stepIndex];
  return (
      <View style={styles.container}>
        <View style={styles.sliderContainer}>
          { viewContents }
        </View>
        <Text style={styles.stepLabel}>{stepLabelText}</Text>
        {(stepDescs[stepIndex] != "") && (
          <Text style={styles.stepDesc}>{stepDescs[stepIndex]}</Text>
        )}
      </View>
  );
}