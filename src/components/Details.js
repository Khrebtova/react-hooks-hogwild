import React from "react";

function Details({pig}){
    return(
        <div data-role="tile" className="pigTile">
            <h3>{pig.name}</h3>
			<img src={pig.image} alt={pig.name} className="maxPigTile"/>
            <p>Specialty:  {pig.specialty}</p>
            <p>Weight:  {pig.weight}</p>
            <p>Highest medal achieved:  {pig['highest medal achieved']}</p>
            <p>Greased: {pig.greased ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Details;