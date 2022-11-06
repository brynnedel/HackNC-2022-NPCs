import React, {useState} from 'react';

function ArtistsForm(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [instagram, setInstagram] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const changeInstagram = (event) => {
    setInstagram(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      location,
      instagram,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setLocation('');
    setInstagram('');
  };
  
  return (
    <div>
      
      <label>Name</label>
      <input type="text" value={name} onChange={changeName}/>
      <label>Location</label>
      <input type="text" value={location} onChange={changeLocation}/>
      <label>Instagram</label>
      <input type="text" value={instagram} onChange={changeInstagram}/>
      <button onClick={transferValue}>Submit</button>
      
    </div>
  );
}

export default ArtistsForm;
