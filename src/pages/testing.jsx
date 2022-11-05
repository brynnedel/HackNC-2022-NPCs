import * as React from "react";

export default function Testing() {  
  
  return(
    <div classname="page">
      <h1 className="title">
        Genres
      </h1>
      <p>
        Discover local artists from your favourite genre. 
      </p>
  
      <div class="divider"></div>
  
      
   <a href="/src/rnb.jsx"><div class="jumbotron">
     <img id="rnbpic" src="https://photos.bandsintown.com/large/9539821.jpeg"></img>
    <h2>Rhythm & Blues</h2>
    <p>Description</p>
     </div></a>
         
      
    
   <a href="/src/rock.jsx"><div class="jumbotron">
     <img src="rockpic" src="https://cdn.shopify.com/s/files/1/1268/8989/articles/What_to_Wear_roa_rock_concert_1000x.jpg?v=1588959838"></img>
    <h2>Rock             </h2>
    <p>Description</p>
     </div></a>
     
   
        <a href="/src/pop.jsx"><div class="jumbotron">
    <h2>Pop             </h2>
    <p>Description</p>
     </div></a>
      
      <a href="/src/hiphop.jsx"><div class="jumbotron">
    <h2>Hip Hop             </h2>
    <p>Description</p>
     </div></a>
      
     <a href="#"><div class="jumbotron">
    <h2>Rock             </h2>
    <p>Description</p>
     </div></a>
      
       <a href="#"><div class="jumbotron">
    <h2>Rock             </h2>
    <p>Description</p>
     </div></a>
      
         <a href="#"><div class="jumbotron">
    <h2>Rock             </h2>
    <p>Description</p>
     </div></a>
      
      <div class="genre-buttons">
        <button type>Pop</button><br></br>
        <button type>R&B</button><br></br>
        <button type>Hip Hop</button><br></br>
        <button type>Jazz</button><br></br>
        <button type>Classical</button><br></br>
        <button type>Blues</button><br></br>
        <button type>Country</button>
        
      </div>
      
        </div>

  
  );
}
