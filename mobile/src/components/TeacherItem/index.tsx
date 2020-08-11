import {View, Image, Text} from 'react-native';
import React from 'react'; 
import style from './style'
import heartOutilineIcom from '../../assets/images/icons/heart-outline.png'
import unfavorit from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import { RectButton } from 'react-native-gesture-handler';


function TeacherItem(){
return(<View style={style.container}>
    <View style={style.profile}>
        <Image style={style.avatar} source={{uri:'https://github.com/diego3g.png'}}/>
        <View style={style.profileInfo}>
            <Text style={style.name}>João Augusto</Text>
            <Text style={style.subject}>Mátematica</Text>
        </View>
    </View>
        <Text style={style.bio}>
            Entusiasta das melhores tecnologias de química avançada.{'\n'} 
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.{'\n'}{'\n'} 
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </Text>
        <View style={style.footer}>
            <Text style={style.price}>
                Preço/Hora {'   '}
                <Text style={style.priceValue}>R$ 20,0</Text>
            </Text>
            <View style={style.buttonsContainer}>
            <RectButton style={[style.favoriteButton,style.favorited]}>
                {/* <Image source={heartOutilineIcom}/> */}
                <Image source={unfavorit}/>
                </RectButton>
            <RectButton style={style.contactButton}>
                    <Image source={whatsappIcon}/>
                <Text style={style.contactButtonText}>
                        Entra em contao 
                    </Text>
                </RectButton>
            </View>
        </View>
</View>);
}
export default TeacherItem;