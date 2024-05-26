import React from "react";

const Title = ({title}) =>{
    return(
        <div className="text-center mt-4">
            <h1 className="task-title display-1">{title}</h1>
        </div>
    )
}

export default Title;