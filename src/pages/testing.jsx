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
     <img src="https://photos.bandsintown.com/large/9539821.jpeg"></img>
    <h2 id="genre-title">Rhythm & Blues</h2>
     <p>Description</p>
     </div></a>
         
      
    
   <a href="/src/rock.jsx"><div class="jumbotron">
     <img  src="https://cdn.shopify.com/s/files/1/1268/8989/articles/What_to_Wear_roa_rock_concert_1000x.jpg?v=1588959838"></img>
    <h2 id="genre-title">Rock             </h2>
    <p>Description</p>
     </div></a>
     
   
        <a href="/src/pop.jsx"><div class="jumbotron">
    <img src="https://otakusmart.com/wp-content/uploads/2022/04/2022-Kpop-Concerts-Schedule.jpg"></img>
          <h2 id="genre-title">Pop             </h2>
    <p>Description</p>
     </div></a>
      
      <a href="/src/hiphop.jsx"><div class="jumbotron">
        <img src="http://www.memorial.org.br/antigo/wp-content/uploads/2017/11/Hip-Hop-1.jpg"></img>
    <h2 id="genre-title">Hip Hop             </h2>
    <p>Description</p>
     </div></a>
      
     <a href="/src/indie.jsx"><div class="jumbotron">
       <img src="https://images.squarespace-cdn.com/content/v1/561d7296e4b0e681f07991b8/1563476358227-RRFKI6TM66EILSC21U8X/pile-audiotree-farout-17.jpg"></img>
    <h2 id="genre-title">Indie             </h2>
    <p>Description</p>
     </div></a>
      
    <a href="/src/pages/jazz.jsx"><div class="jumbotron">
      <img src="https://cdn.stmarytx.edu/wp-content/uploads/2016/11/Rufus-Reid.jpg"></img>
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
