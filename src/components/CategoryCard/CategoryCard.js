import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';

const CategoryCard = ({CategoryItem,onSelect}) => {
  return (
    //On Press işlemi için kullanılmıştır opaktık tıklama vs hiss vermemeden direk yönlenmektedir.
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: CategoryItem.strCategoryThumb}}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{CategoryItem.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
