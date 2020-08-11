import { View, ScrollView, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './style'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';



function TeacherList() {
const [teachers, setTeachers] = useState([]);
const [favorites, setFavorites] = useState<number[]>([]);

const [isFiltersVisible, setIsFiltersVisible]=useState(false);

const [subject, setSubject] = useState("");
const [week_day, setWeekDay] = useState("");
const [time, setTime] = useState("");
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

      async function handleFiltersSubmit() {
          const response =await api.get('classes,',{params:{subject,week_day,time}});
          setTeachers(response.data)
          console.log(response.data);
     
        
     
      }
    return (
      <View style={styles.container}>
        <PageHeader
          title="Proffys Disponivei"
          headerRight={
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          }
        >
          {isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Materia</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual a Máteria"
                value={subject}
                onChangeText={(text) => setSubject(text)}
              />

              <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da Semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Qual o Dia"
                    value={week_day}
                    onChangeText={(text) => setWeekDay(text)}
                  />
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horáro</Text>
                  <TextInput
                    style={styles.input}
                    value={time}
                    onChangeText={(text) => setTime(text)}
                    placeholder="Qual o Horário"
                  />
                </View>
              </View>
              <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </PageHeader>
        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        >
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
      </View>
    );
}
export default TeacherList;