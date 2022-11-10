import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Detail from './pages/Detail';
import Categories from './pages/Categories';
import FoodList from './pages/FoodList';

const Stack = createStackNavigator();
const NStack = createNativeStackNavigator();
const Router =()=>{
  return(
    <NavigationContainer>
       <NStack.Navigator screenOptions={{ headerShown: false }}> 
          <NStack.Screen name='CategoriesPage' component={Categories}/>
          <NStack.Screen name='FoodListPage' component={FoodList}/>
          <NStack.Screen name='DetailPage' component={Detail}/>
       </NStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;