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
    <img id="poppic" src="https://otakusmart.com/wp-content/uploads/2022/04/2022-Kpop-Concerts-Schedule.jpg"></img>
          <h2>Pop             </h2>
    <p>Description</p>
     </div></a>
      
      <a href="/src/hiphop.jsx"><div class="jumbotron">
    <h2>Hip Hop             </h2>
    <p>Description</p>
     </div></a>
      
     <a href="/src/indie.jsx"><div class="jumbotron">
    <h2>Indie             </h2>
    <p>Description</p>
     </div></a>
      
    <a href="/src/jazz.jsx"><div class="jumbotron">
    <h2>Jazz            </h2>
    <p>Description</p>
     </div></a>
      
      <a href="/src/classical.jsx"><div class="jumbotron">
    <h2>Classical             </h2>
    <p>Description</p>
     </div></a>
       
       <a href="/src/country.jsx"><div class="jumbotron">
    <h2>Country             </h2>
    <p>Description</p>
     </div></a>

      
        </div>

  
  );
}
