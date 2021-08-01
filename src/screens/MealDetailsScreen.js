import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Details Screen</Text>
      <Button
        title='Go To Meal Category'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Categories',
          });
        }}
      />
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
