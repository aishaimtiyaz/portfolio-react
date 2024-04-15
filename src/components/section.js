import react from "react";

const Section =({title,desc})=>{
    return(
        <div className="section">
            <h2>{title}</h2> 
            <p>{desc}</p> 
        </div>
        
    );
}
export default Section;
 