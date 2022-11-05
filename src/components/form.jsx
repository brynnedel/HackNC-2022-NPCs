
import React, {useState} from 'react';

function handleChange(event){
  const value = event.target.value;
  setState({
    ...state,
    [event.target.name]: value
  });
}

function Form() {
  const [state, setState] = React.useState({
    name:"",
    location:"",
    genre:"",
    social:''
  })
  
  return(
    <form>
      <label>
        Name
         <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Location
        <input>
          type="text"
          name-"location"
          value={state.location}
          onChange={handleChange}
        </input>
      </label>
      <label>
        Genre
        <input>
          type="text"
          name="genre"
          value={state.genre}
          onChange={handleChange}
        </input>
      </label>
      <label>
        Social Media
        <input>
          type="text"
          name="social"
          value={state.social}
          onChange={handleChange}
        </input>
      </label>
    </form>
  )
}

export default Form;