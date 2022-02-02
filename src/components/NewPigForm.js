import React from "react"

function NewPigForm({pigData, setNewPig, handleAddNewPig}){
    
    function handleOnChange(e){
        const key = e.target.name
        const value = e.target.value
        const addedPig = {...pigData, [key] : value}
        setNewPig(addedPig)
    }
    
    return(
        <form className="newPigForm" onSubmit = {(e)=>handleAddNewPig(e)} style={{display: "flex", flexDirection: "column"}}>
            <input type = "text" name="name" placeholder="enter piggy name"  onChange={handleOnChange}></input>
            <input type = "text" name="specialty" placeholder="enter piggy specialty"  onChange={handleOnChange}></input>
            <input type = "text" name="weight" placeholder="enter piggy weght in Kg" onChange={handleOnChange}></input>
            <input type = "text" name="highest medal achieved" placeholder="highest medal achieved"  onChange={handleOnChange}></input>
            <input type = "text" name="image" placeholder="image URL" onChange={handleOnChange}></input>
            <label><input type = "checkbox" name="greased" ></input>Greased</label>
            <button type="submit">Add pig</button>
        </form>
    )
}
export default NewPigForm;