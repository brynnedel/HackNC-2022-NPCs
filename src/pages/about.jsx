import * as React from "react";

export default function About() {
  
  // discord link: https://discord.gg/ZnHhnp3V
  
  return (
    <div className="page">
      <h1 className="title">
        About the website
      </h1>
      <p>
        Welcome to the UNC-CH Artist finder. where you can instantly find artists in the
        Chapel Hill area, connect, and book them for events. 
        
        If you are an up and coming artist in the area, you can also input your own information
        through the ""LINK"" Artists page!
      </p>
      <p>
        Please use the ""Genres"" page to navigate through 
        filters, and the ""User"" page to input new artists 
        in the Chapel Hill area. // Add links to finalized pages later
      </p>
      <ul>
        <li>
          🎉 Right now, your site is <strong>live on the web</strong> 🌐 with a
          real URL (a secure HTTPS address!) that updates as soon as you make
          changes.
        </li>
        <li>
          💥 <strong>Add a domain</strong> to your new Glitch project! Just go
          to the <strong>Tools</strong> menu in the Glitch editor, and click{" "}
          <strong>Custom Domains</strong>.
        </li>
        <li>
          🌈 Use the <strong>Share</strong> button in the Glitch editor to
          invite others in to edit your new React project by typing in their
          email address or Glitch username. <br /> <strong>Tip:</strong> 👀Make
          your code, or even your entire app, private to just those you invite,
          by{" "}
          <a href="https://glitch.com/pricing">upgrading your Glitch account</a>
          .
        </li>
      </ul>

      <p>
        {" "}
        The Glitch community is glad to welcome you, and the Internet is better
        when it's made by real people. We can't wait to see what you create!
      </p>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        <a href="https://glitch.com/">Glitch</a>.
      </p>
    </div>
  );
}
