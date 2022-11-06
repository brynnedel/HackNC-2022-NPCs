import * as React from "react";

export default function Testing() {
  return (
    <div classname="page">
      <div class="container-fluid banner">
        <h1 class="genre-title">
          <span class="change-color">G</span>
          <span class="change-color">e</span>
          <span class="change-color">n</span>
          <span class="change-color">r</span>
          <span class="change-color">e</span>
          <span class="change-color">s</span>
        </h1>
      </div>

      <h3>Discover local artists from your favourite genre.</h3>

      <div class="divider"></div>

      <a href="/rnb">
        <div class="jumbotron">
          <img src="https://photos.bandsintown.com/large/9539821.jpeg"></img>
          <h2 id="genre-title">Rhythm & Blues</h2>
 
        </div>
      </a>

      <a href="/rock">
        <div class="jumbotron">
          <img src="https://cdn.shopify.com/s/files/1/1268/8989/articles/What_to_Wear_roa_rock_concert_1000x.jpg?v=1588959838"></img>
          <h2 id="genre-title">Rock </h2>
     
        </div>
      </a>

      <a href="/pop">
        <div class="jumbotron">
          <img src="https://otakusmart.com/wp-content/uploads/2022/04/2022-Kpop-Concerts-Schedule.jpg"></img>
          <h2 id="genre-title">Pop </h2>
       
        </div>
      </a>

      <a href="/hiphop">
        <div class="jumbotron">
          <img src="http://www.memorial.org.br/antigo/wp-content/uploads/2017/11/Hip-Hop-1.jpg"></img>
          <h2 id="genre-title">Hip Hop </h2>
    
        </div>
      </a>

      <a href="/indie">
        <div class="jumbotron">
          <img src="https://images.squarespace-cdn.com/content/v1/561d7296e4b0e681f07991b8/1563476358227-RRFKI6TM66EILSC21U8X/pile-audiotree-farout-17.jpg"></img>
          <h2 id="genre-title">Indie </h2>
       
        </div>
      </a>

      <a href="/jazz">
        <div class="jumbotron">
          <img src="https://cdn.stmarytx.edu/wp-content/uploads/2016/11/Rufus-Reid.jpg"></img>
          <h2 id="genre-title">Jazz </h2>
      
        </div>
      </a>

      <a href="/classical">
        <div class="jumbotron">
          <img src="https://d2d5f3568fvb9s.cloudfront.net/wp-content/uploads/2020/05/22163339/56551745_2344293688995192_4029564593717116928_o.jpg"></img>
          <h2 id="genre-title">Classical </h2>
   
        </div>
      </a>

      <a href="/country">
        <div class="jumbotron">
          <img src="https://townsquare.media/site/204/files/2019/01/William-Michael-Morgan-Twitter.gif?w=980&q=75"></img>
          <h2 id="genre-title">Country </h2>
    
        </div>
      </a>

      <a href="#" id="genre-button-mask">
      <div class="container" id="genre-button">
        <h1 id="genre-name">Country</h1>
      </div>
        </a>
      
      <h1>hi</h1>
      <div class="divider"></div>
    
    </div>
  );
}
