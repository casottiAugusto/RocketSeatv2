import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyICons from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoimg from '../../assets/images/logo.svg';
import api from '../../service/api';
import './style.css';


function Landing(){
    const [totalConnections,setTotalConnections]=useState(0)
    useEffect(()=>{
        api.get('connections').then(response=>{
       const {total} =response.data;
       
       setTotalConnections(total);
      
    })
    },[])
    return(
        <div id="page-landig">
            <div id="page-langid-content" className="container">
                <div className="logo-container">
                    <img src={logoimg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos Online</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>
                <div className="button-container">
                    <Link to="/study" className="stury" >
                        <img src={studyICons} alt="estudar"/>
                        Estudar
                    </Link>
                    <Link to="give-classes" className='give-classes'>
                        <img src={giveClassesIcon} alt=""/>
                        Dar Aulas
                    </Link>
                </div>
            <span className="total-connections">
                    Total de {totalConnections} conexões Ja realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
            </span>
            </div>

        </div>
    )
}
export default Landing;