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

import { CATEGORIES } from '../../assets/data/dummyData';

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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

// CategoryScreen.defaultNavigationOptions = {
//   headerTitle: 'Meal Categories',
//   headerStyle: {
//     backgroundColor: colors.primaryColor,
//   },
//   headerTintColor: 'white',
// };

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
