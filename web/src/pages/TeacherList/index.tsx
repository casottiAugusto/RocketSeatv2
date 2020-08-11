import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader/";
import TeacherItem,{Teacher} from "../../components/TeacherItens";
import Select from '../../components/Select';
import "./styles.css";
import Input from "../../components/Input";
import api from "../../service/api";



export default function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_day] = useState('');
  const [time, settime] = useState('');
  const [teacherList, setTeacherList] = useState([]);
    async function SearchTeachers(e:FormEvent) {
        e.preventDefault();
       const response= await api.get('classes',{
            params:{time, week_day, subject}
        });
        
        setTeacherList(response.data)
        console.log(response.statusText)
        console.log(time,week_day,subject)

      
  }
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Esses são os Proffys disponíveis.">
                <form id="search-teachers" onSubmit={SearchTeachers}>
                    <Select name="subject" label="Máteria"
                    value={subject} onChange={(e)=>{setSubject(e.target.value)}}
                        options={[
                            { value: "1", label: "Mátematicas" },
                            { value: "2", label: "Portugues" },
                            { value: "3", label: "Historia" },
                            { value: "4", label: "Geografia" },
                            { value: "5", label: "Quimica" },
                            { value: "6", label: "Fisicas" },
                            { value: "7", label: "Biologia" },
                            { value: "8", label: "Religião" },
                            { value: "9", label: "Artes" }
                        ]}
                    />
                    <Select name="week_day" label="Dia da Semana"
                        value={week_day} onChange={(e) => { setWeek_day(e.target.value) }}
                        options={[
                            { value: "1", label: "Domingo" },
                            { value: "2", label: "Segunda-feira" },
                            { value: "3", label: "terça-feira" },
                            { value: "4", label: "Quarte-feira" },
                            { value: "5", label: "Quinta-feira" },
                            { value: "6", label: "Sexta-feira" },
                            { value: "7", label: "Sábadão" },
                           
                        ]}
                    />
                    <Input type="time" name="time" label="Horas" 
                        value={time}
                        onChange={(e) => {settime(e.target.value) }}
                        
                    />
                    <button type="submit">Buscar</button>
                   
                </form>
            </PageHeader>
            <main>
                {teacherList.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                
                
               
            </main>
        </div>
    );
}