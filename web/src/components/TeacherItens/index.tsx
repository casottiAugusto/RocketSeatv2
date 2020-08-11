import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";
import api from "../../service/api";

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string

}
export interface TecherItemProps{
    teacher:Teacher

}
const TeacherItem:React.FC<TecherItemProps> = ({teacher})=> {
    function createNewConection(){
    api.post('connections',{
        user_id: teacher.id  })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
            {teacher.bio}
            </p>
           <footer>
            <p>
             Preço/hora
           <strong>{teacher.cost}</strong>
            </p>
            <a target='_blank' onClick={createNewConection} href={`https://wa.me/${teacher.whatsapp}`}>
            <img src={whatsappIcon} alt="Whatsapp" />
             {teacher.whatsapp}
        </a>
            </footer>
        </article>
    );
}

export default TeacherItem;