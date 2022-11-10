import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import Config from 'react-native-config';

import CategoryCard from '../../components/CategoryCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
//useFetch kullanmak için import edilmelidir.
import useFetch from '../../hooks/useFetch/useFetch';

const Categories = ({ navigation }) => {
//Verileri çekmek için oluşturduğumuz bir use yani hooks yapısıdır. Url vererek istenen apiye istek atılmaktadır. Gelen veriler Load eror ve datadır.useFetch import edilmelidir.
const { loading, data, error } = useFetch(`${Config.API_URL}categories.php`);

// Tetiklenecek categorye uygulanacak işlemlerin yapıldığı alandır.
const handleCategorySelect = (strCategory) => {
    navigation.navigate('FoodListPage',{strCategory});
  };
  // Categori listesi Flash listin içerisine basılması için oluşturulmuştur...burada iki özellik vardır 1 tanesi item basmak için diğeri tıkladığında hangleyi tetiklemek içindri
  const renderCategory = ({ item }) =>(
    <CategoryCard 
      CategoryItem={item} 
      onSelect={()=>handleCategorySelect(item.strCategory)} 
    />
   );
  //Loading ve hata kontrolleri için oluşturulmuş lottiler  
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Categories;