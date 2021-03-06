import {View} from 'react-native';
import React from 'react'; 
import styles from './style';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';



function Favorites(){
    return (<View style={styles.container}>
        <PageHeader title='Meus proffysFavoritos'/>
        <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
            <TeacherItem />
        </ScrollView>
    </View>);
}
export default Favorites;