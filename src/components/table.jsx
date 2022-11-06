import React, {useState} from 'react';

function ArtistsForm(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [social, setSocial] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const changeSocial = (event) => {
    setSocial(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      location,
      social,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setLocation('');
    setSocial('');
  };
  
  return (
    <div>
      
      <label>Name</label>
      <input type="text" value={name} onChange={changeName}/>
      <label>Location</label>
      <input type="text" value={location} onChange={changeLocation}/>
      <label>Social Media</label>
      <input type="text" value={social} onChange={changeSocial}/>
      <button onClick={transferValue}>Submit</button>
      
    </div>
  );
}

export default ArtistsForm;
