import React from 'react';
import {StyleSheet, Animated, StatusBar, View} from 'react-native';
import Card from './src/Components/Card/Card';
import {Categories, COLOURS} from './src/Data/Categories';

const ITEM_SIZE = 130;

const App = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={styles.statusBar}>
        <StatusBar backgroundColor="#61dafb" barStyle={'dark-content'} />
      </View>
      <View style={styles.container}>
        <Animated.FlatList
          showsVerticalScrollIndicator={false}
          data={Categories}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          keyExtractor={item => `${item.name}${Math.random() * 1000}`}
          renderItem={({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 0.5),
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });

            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });

            return (
              <Animated.View style={{transform: [{scale}], opacity}}>
                <Card item={item} />
              </Animated.View>
            );
          }}
        />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLOURS.accentPink,
  },
  statusBar: {
    height: 40,
    backgroundColor: '#61dafb',
  },
});
