import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

function VentMode(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    paddingLeft: 16,
    paddingRight: 16,
    opacity: 0.97,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  }
});

export default VentMode;
