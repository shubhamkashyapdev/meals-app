import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// screens //
import CategoryMeals from '../screens/CategoryMeals';
import CategoryScreen from '../screens/CategoryScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';

import { CATEGORIES } from '../../assets/data/dummyData';
import colors from '../../assets/constants/colors';

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      navigationOptions: {
        headerTitle: 'Category Screen!!',
      },
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: MealDetailScreen,
    FavoritesScreen: FavoritesScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
      },
    },
    mode: 'modal',
  }
);

export default createAppContainer(MealNavigator);
