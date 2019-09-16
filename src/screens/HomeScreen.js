import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>Hi there!!!</Text>
      <Button style={styles.buttonPadding}
        onPress={() => navigation.navigate('Components')}
        title='Go to components demo' />
      <Button style={styles.buttonPadding}
        onPress={() => navigation.navigate('List')}
        title='Go to list' />
      <Button style={styles.buttonPadding}
        onPress={() => navigation.navigate('Image')}
        title='Go to image' />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonPadding: {
    padding: 10,
    margin: 10,
    borderColor: "#fff"

  },
});

export default HomeScreen;