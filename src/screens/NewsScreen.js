import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from "./components/header";
import Colors from "../constat/Colors";
import ListComponent from "./components/ListComponent";

const NewsScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header navigation={navigation} title="Inicio" />
      <View style={{backgroundColor:'white',height:'40%',marginTop:20,marginHorizontal:15,borderRadius:16,elevation:5,shadowColor:'gray'}}>
        <View style={{width:'100%',padding:15}}>
          <Text style={{fontSize:25,color:Colors.secColor}}>Listado de Libros</Text>
        </View>
        <View>
          <ListComponent data={} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;
