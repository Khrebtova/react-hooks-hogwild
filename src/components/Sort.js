import React from "react";

function Sort({handleChange, sortBy}){
    return(
        <div style={{color: "blue"}}>
			<span>Sort by</span>
            <select name="sort" onChange={(e) => handleChange(e)} >
				<option value ="weight">Weight</option>
				<option value = "name">Name</option>
			</select>
            
		</div>
    )
}

export default Sort;