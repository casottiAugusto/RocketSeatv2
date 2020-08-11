
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import style from './style';
import giveClassesBackgrounImg from  '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function GiveClasses() {
    const navigation =useNavigation();
    function handleNavigationBack() {
        navigation.goBack();
        
    }
    return (
    <View style={style.container}>
    <ImageBackground resizeMode="contain" source={giveClassesBackgrounImg} style={style.content}>
    <Text style={style.title}>
                    Quer ser
                    um Proffy?
    </Text>
    <Text style={style.description}>
Para começar, você precisa
se cadastrar como professor
na nossa plataforma web.
    </Text>
    </ImageBackground>
 <RectButton style={style.okButton} onPress={handleNavigationBack}>
     <Text style={style.okButtonText}> Tudo Bem</Text>
 </RectButton> 
    </View>)

};
export default GiveClasses;