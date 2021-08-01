import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import colors from '../../assets/constants/colors';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../../assets/data/dummyData';

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(itemData) => renderGridItem(itemData)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
