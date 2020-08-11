import React,{useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../service/api';



function TeacherForm(){
  const history=useHistory();
  const[name,setName]=useState('');
  const[avatar,setAvatar]=useState('');
  const[whatsapp,setWhatsapp]=useState('');
  const[bio,setBio]=useState('');
  const [subject, setSubject]=useState('');
  const[cost,setCost]=useState('');
  const [scheduleItems,setScheduleItms] =useState([
    {week_day:0,from:'',to:''}
  ]);
function addNewScheduleItn() {
  setScheduleItms([...scheduleItems, { week_day:1 , from: "", to: "" }]);
  
};
  function updateScheduleItemValue(position:number,field:string,value:string) {
    const updateScheduleItemValue = scheduleItems.map((scheduleitem,index)=>{
      if(index === position){
        return{...scheduleitem,[field]:value}
      }
      return scheduleitem;
    });
    setScheduleItms(updateScheduleItemValue)
  
}

function handleCreateClass(e:FormEvent){
  e.preventDefault();
  api.post('classes',
  {
    name,
    avatar,
    whatsapp,
    bio,
    cost:Number(cost),
    subject,
    schedule:scheduleItems})
    .then(()=>{alert('Cadastro Realizado com sucesso!')
    console.log(cost,subject,scheduleItems)
     history.push('/');
    })
    
    .catch(()=>{ alert('Erro ao realizar o cadastro!')
    
     
    
  })
}

      return (
      <div id="page-teacher-form" className="container">
        <PageHeader
          title="Quer ser um Proffy ?"
          description="O primeiro passo é preencher esse formulario."
        />
        <main>
          <form onSubmit={handleCreateClass}> 
            <fieldset>
              <legend>Seus dados</legend>
              <Input name="name" label="Nome completo " value={name} onChange={(e)=>{ setName (e.target.value)}}/>
              <Input name="avatar" label="Avatars" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
              <Input name="whatsapp" label="watsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} />
              <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => { setBio(e.target.value) }} />
            </fieldset>
            <fieldset>
              <Select
                  name="subject"
                label="Máteria"
                  value={subject} onChange={(e) => { setSubject(e.target.value) }}
                options={[
                  { value: "1", label: "Mátematicas" },
                  { value: "2", label: "Portugues" },
                  { value: "3", label: "Historia" },
                  { value: "4", label: "Geografia" },
                  { value: "5", label: "Quimica" },
                  { value: "6", label: "Fisicas" },
                  { value: "7", label: "Biologia" },
                  { value: "8", label: "Religião" },
                  { value: "9", label: "Artes" },
                ]}
              />
              <Input name="cost" label="custo da aula por hora  " value={cost} onChange={(e) => { setCost(e.target.value) }} />
            </fieldset>
            <fieldset>
              <legend>
                Horários disponiveis
                <button type="button" onClick={addNewScheduleItn}>
                  {" "}
                  + Novo Horário
                </button>
              </legend>
              {scheduleItems.map((scheduleItem,index) => {
                return(
                   <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                      onChange={e => updateScheduleItemValue(index,"week_day",e.target.value)}
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
                    <Input name="fron" label="Das" type="time" value={scheduleItem.from} onChange={e => updateScheduleItemValue(index, "from", e.target.value)} />
                    <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => updateScheduleItemValue(index, "to", e.target.value)} />
                </div>
                )
               
              })}
            </fieldset>
            <footer>
              <p>
                <img src={warningIcon} alt="warning" />
                Aviso Importante
                <br />
                Prencha todos os dados
              </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </main>
      </div>
    );

}
export default TeacherForm;