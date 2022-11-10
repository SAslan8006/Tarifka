import React from 'react';
import {View,Image, Text,FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import Config from 'react-native-config';

//useFetch kullanmak için import edilmelidir.
import useFetch from '../../hooks/useFetch/useFetch';
import FoodCard from '../../components/FoodCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const FoodList = (props) => {  

  //Category sekmesini bulmak için gelen verilerin arasında propsun içerisindeki route yapısındaki params içindeki strCategory verisini ayırmak için kullanılıdı
  const {strCategory}=props.route.params;

  //Verileri çekmek için oluşturduğumuz bir use yani hooks yapısıdır. Url vererek istenen apiye istek atılmaktadır. Gelen veriler Load eror ve datadır.useFetch import edilmelidir.
  const { loading, data, error } = useFetch(`${Config.API_URL}filter.php?c=${strCategory}`);

  // Tetiklenecek Food uygulanacak işlemlerin yapıldığı alandır.
  const handleFoodSelect = strMeal => {
    props.navigation.navigate('DetailPage', {strMeal});
  };
  // Categori listesi Flash listin içerisine basılması için oluşturulmuştur...burada iki özellik vardır 1 tanesi item basmak için diğeri tıkladığında hangleyi tetiklemek içindri
  const renderFoodList = ({ item }) =>(
  <FoodCard foodItem={item} onSelect={() => handleFoodSelect(item.strMeal)} />
  );
  //Loading ve hata kontrolleri için oluşturulmuş lottiler  
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
       <FlatList data={data.meals} renderItem={renderFoodList} />
    </SafeAreaView>
  );
};

export default FoodList;