import React from "react";
import "./Experience.css";

const Experience = ()=>{
    return(
        <div className = "experience" id="Experience">
            <div className = "achievement">
                <div className="circle">8+</div>
                <span>GPA</span>
                <span>University of Auckland </span>
                
            </div>

            <div className = "achievement">
                <div className="circle">5+</div>
                <span>Years</span>
                <span>Workplace Experience</span>
            </div>

            <div className = "achievement">
                <div className="circle">100%</div>
                <span>Motivations</span>
                <span>in programming</span>
            </div>
        </div>
    )
}

export default Experience;