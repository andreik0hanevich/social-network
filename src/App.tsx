import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className = 'app-wrapper' >
        <header className = 'header'>
            <img src="https://img.freepik.com/free-psd/gradient-abstract-logo_23-2150689648.jpg?w=996&t=st=1695563114~exp=1695563714~hmac=54752555f99506a8d48fc5579c5bdf80e312c9beeebdf0b3216244de915590a1" alt="Logo"/>
        </header>
        <nav className = 'nav'>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
        </nav>
        <div className = 'content'>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="image"/>
        </div>
    </div>
  );
};


export default App;