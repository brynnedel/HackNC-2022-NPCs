import * as React from "react";

export default function Testing() {
  return (
    <div classname="page">
      <div  class=" justify-content-center">
      <div class="container-fluid">
      <h1 class="genre-title">
          <span class="change-color">G</span>
          <span class="change-color">e</span>
          <span class="change-color">n</span>
          <span class="change-color">r</span>
          <span class="change-color">e</span>
          <span class="change-color">s</span>
        </h1>
        </div>
      </div>
        

      <h3>Discover local artists from your favourite genre.</h3>

      <div class="divider"></div>


      <a href="/country" id="genre-button-mask">
      <div class="container" id="genre-country">
        <h1 id="genre-name">Country</h1>
      </div>
        </a>
      
       <a href="/hiphop" id="genre-button-mask">
      <div class="container" id="genre-hiphop">
        <h1 id="genre-name">Hip Hop</h1>
      </div>
        </a>
      
        <a href="/indie">
      <div class="container" id="genre-indie">
        <h1 id="genre-name">Indie</h1>
      </div>
        </a>
      
      
        <a href="/rnb" id="genre-button-mask">
      <div class="container" id="genre-rnb">
        <h1 id="genre-name">Rhythm & Blues</h1>
      </div>
        </a>
      
       <a href="/classical" id="genre-button-mask">
      <div class="container" id="genre-classical">
        <h1 id="genre-name">Classical  </h1>
      </div>
        </a>
      
       <a href="/jazz" id="genre-button-mask">
      <div class="container" id="genre-jazz">
        <h1 id="genre-name">Jazz</h1>
      </div>
        </a>
      
       <a href="/pop" id="genre-button-mask">
      <div class="container" id="genre-pop">
        <h1 id="genre-name">Pop</h1>
      </div>
        </a>
      
      <a href="/rock" id="genre-button-mask">
      <div class="container" id="genre-rock">
        <h1 id="genre-name">Rock</h1>
      </div>
        </a>

      <div class="divider"></div>
       <a href="/slideshowtest">
      <div class="container" id="genre-indie">
        <h1 id="genre-name">testing</h1>
      </div>
        </a>
   
      
    </div>
  );
}
