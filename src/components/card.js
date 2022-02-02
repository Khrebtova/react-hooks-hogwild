import React from "react"

function Card({pig, handleClick}){
    return(
        <div className="ui card" onClick = {() => handleClick(pig)}>
            <div className="image">
                <img src={pig.image} alt = {pig.name}/>
            </div>
            <div class="content">
                <h3 class="header">{pig.name}</h3>
                <div class="meta">
                <span class="date">{"weight: " + pig.weight}</span>
                </div>
                <div class="description">
                {"Specialty: " + pig.specialty}
               
                </div>
            </div>
            <div class="extra content">
                <p>
                 {"Highest medal achieved: " + pig['highest medal achieved']}
                </p>
            </div>
        </div>
    )
}

export default Card;