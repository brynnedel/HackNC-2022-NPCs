import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = ["Discover Artists in Chapel Hill"];

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    const newHello = randomLanguage();

    // Call the function to set the state string in our component
    setHello(newHello);
  };
  return (
    <>
      <h1 className="title">{hello}</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <animated.div onMouseEnter={trigger} style={style}>
        <img
          src="https://cdn.glitch.global/d0eea474-4e6d-40ae-ac0a-ef353a459b23/unc%20vinyl.gif?v=1667684923524"
          className="illustration"
          onClick={handleChangeHello}
          alt="Illustration click to change language"
        />
      </animated.div>
      <div className="navigation">
        {/* When the user hovers over this text, we apply the wiggle function to the image style */}
        <animated.div onMouseEnter={trigger}>. </animated.div>
      </div>
      <div className="instructions">
        <h2>Using this website</h2>
        <p>
          This is the <strong>UNC-CH Artist Finder</strong> project. You can use
          it to find and filter artist by genre to connect and book them for
          your own event. Artists, feel free to leave your information in your respective genre to get noticed!
        </p>
        
        <div class="divider"></div>
          <div class="divider"></div>
          <div class="divider"></div>
        
        <div class="container-fluid">
          <img id="banner-image"src="https://variancemagazine.com/images/weston-estate-84032.jpg"></img>
        </div>
        <h2>h</h2>
        
           <div class="row">
      <div class="column"><h4>Text</h4></div>
             <div class="column"></div>
      </div>
        
      </div>
      
    </>
  );
}
