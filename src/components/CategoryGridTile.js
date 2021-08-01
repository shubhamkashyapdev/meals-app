import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ title, onSelect, color }) => {
  let TouchableContainer = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableContainer = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableContainer style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      </TouchableContainer>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
