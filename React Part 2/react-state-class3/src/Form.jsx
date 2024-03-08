import { useState } from "react"

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
    })

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }
    let handleInputChange = (event) => {
         let fieldName = event.target.name;
         let newValue = event.target.value;
         setFormData(
            (currData) => {
                // currData[fieldName] = newValue;
                return {...currData, [fieldName]: newValue};
            }
         );
    };
    let handleSubmit = (event) => {
       event.preventDefault();
       setFormData({
        fullName: "",
        username: "",
       });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="enter your name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"></input><br></br><br></br>
            <label htmlFor="username">Username</label>
            <input placeholder="enter username" type="text" id="username" value={formData.username} name="username" onChange={handleInputChange}></input>
            <button>Submit</button>
        </form>
    )
}