import React from "react";
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png'; 
import glassesemoji from '../../img/glassesimoji.png';
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";

const Intro = ()=>{
    // making transition
    const transition = {duration: 2, type:'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro">
            <div className ="i-left">
                <div className="i-name">
                    <span style={{color:darkMode? 'white': ''}}>Hi ! I Am</span>
                    <span>Dexin Sun</span>
                    <span>A second year Computer Sicence student from the University of Auckland. 
                        With passion in programming, I am always eager to learn different skills and 
                        work on challenges that can make things funtional and helpful.</span>
                </div>

                <button className = "button i-button">Hire Me</button>
                <div className="i-icons">
                    <a href='https://github.com/CookieDD'>
                       <img src={Github} alt =""></img> 
                    </a>
                    <a href="https://www.linkedin.com/in/dexin-sun-6a0a5a97/">
                        <img src={LinkedIn} alt =""></img>
                    </a>
                </div>
            </div>

            <div className ="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <motion.img 
                initial={{left:"-36%"}}
                whileInView={{left:"-24%"}}
                transition={transition}
                src={glassesemoji} alt=""/>

                <motion.div 
                initial={{top:"-4%", left:"74%"}}
                whileInView={{left:"68%"}}
                transition={transition}
                style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv img={Crown} text1="Web" text2="Developer"/>
                </motion.div>

                <motion.div 
                initial={{top:"18rem", left:"9rem"}}
                whileInView={{left:"1rem"}}
                transition={transition}
                style={{top:'18rem', left:'1rem'}}>
                    <FloatingDiv img={thumbup} text1="Best Design" text2="Award"/>
                </motion.div>

                {/* blur divs */}
                <div className='blur' style={{background:"rgb(238 210 255"}}></div>
                <div className="blur" style={{background:"#C1F5FF", top:"17rem", width:"21rem",height:"11rem",left:"-9rem"}}></div>
            </div>
        </div>
    )
}

export default Intro;