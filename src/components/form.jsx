import React from 'react';

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
          name-"name"
          value={}
        </input>
      </label>
    
    
    
    </form>
  )
}