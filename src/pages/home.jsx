import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = [
  "Artists in CH",
  // "Salut React",
  // "Hola React",
  // "안녕 React",
  // "Hej React",
  // "नमस्ते React",
  // "你好 React",
];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

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
      <h1 className="title">{hello}!</h1>
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
        <animated.div onMouseEnter={trigger}> </animated.div>
      </div>
      <div className="instructions">
        <h2>Using this website</h2>
        <p>
          This is the <strong>UNC-CH Artist Finder</strong> project. You can use
          it to find and filter artist by genre to connect and book them for your own event.
          Please check out the About page for more information or 
        </p>
      </div>
    </>
  );
}
