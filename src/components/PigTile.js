import React from "react";

function PigTile({pig, handleClick}){
    return(
        <div data-role="tile" id = {pig.name} className="pigTile" onClick = {() => handleClick(pig)}>
			<h3>{pig.name}</h3>
			<img className="minPigTile"  src={pig.image} alt={pig.name} />
		</div>
    )
}

export default PigTile;