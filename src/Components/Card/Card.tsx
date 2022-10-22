import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLOURS} from '../../Data/Categories';

const Card = ({item}: any) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.crust}>{item.crust}</Text>
        <Text style={styles.size}>{item.size}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLOURS.accent,
    marginTop: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: COLOURS.accentPink,
  },
  crust: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOURS.accentPink,
  },
  size: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOURS.accentPink,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: COLOURS.accentPink,
  },
});
