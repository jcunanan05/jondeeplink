import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

export default function ColorScreen({ route }) {
  const routeParams = route && route.params;
  const colorId = routeParams && routeParams.colorId;
  const defaultColor = 'ffffff';
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View
        style={[
          styles.colorBox,
          { backgroundColor: `#${colorId || defaultColor}` },
        ]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          The color is: {`#${colorId || defaultColor}`}
        </Text>
      </View>
      <View
        style={[
          styles.colorBox,
          { backgroundColor: `#${colorId || defaultColor}` },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: '#ebebeb',
  },
  text: {
    fontSize: 16,
    marginVertical: 40,
    textAlign: 'center',
  },
  colorBox: {
    flex: 1,
    width: '100%',
  },
});
