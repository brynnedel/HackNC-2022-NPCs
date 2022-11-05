import React, {useState} from 'react';

function ArtistsForm(props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');
  const [email, setEmail] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeLocation = (event) => {
    setLocation(event.target.value);
  };
  
  const changeGenre = (event) => {
    setGenre(event.target.value);
  };
  
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      location,
      genre,
      email,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setLocation('');
    setGenre('');
    setEmail('');
  };
  
  return (
    <div>
      
    </div>
  );
}