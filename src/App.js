
import logo from './logo.svg';
import './App.css';
import './jsapp';
import Card from './Card';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>\
    <div className="cantainer">
      <Card img="./images/mikasa.png" name="Mikasa" job="Mankind weapon
" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/armin.png" name="armin" job="Mastermind" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/eren.jpg" name="Eren" job="Destroy the world
" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/adam.jpg" name="Erwin Smith" job="the legend
" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/levi.jpg" name="levi" job="...." Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/lojain.png" name="Anne" job="The female giant
" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />
      <Card img="./images/sasha.jpg" name="Sasha" job="<3" Facebook="https://www.facebook.com/mohammad.yacoub94/" twitter="https://twitter.com/mohyacoub94" github="https://github.com/MohYacoub" />


    </div>
  );
}

export default App;
