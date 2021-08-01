import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../../assets/data/dummyData';

let mealTitleColor;

const CategoryMeals = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategoryMeal = CATEGORIES.filter((cat) => cat.id === catId)[0];

  mealTitleColor = selectedCategoryMeal.color;
  return (
    <View style={styles.screen}>
      <Text>{selectedCategoryMeal.title} </Text>
      <Text>The Category Meal Screen</Text>
      <Button
        title='Go To Favorites'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'FavoritesScreen',
          });
        }}
      />
    </View>
  );
};

export default CategoryMeals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
