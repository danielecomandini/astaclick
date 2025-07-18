import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ACText from './UI/elements/ACText';
import ACIcon from './UI/elements/ACIcon';
import { Home } from 'lucide-react';
import ACButton from './UI/elements/ACButton';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <hr />

      <ACIcon icon={Home} color="red" />
      <ACText>HELLO WORLD</ACText>
      <ACButton
        onClick={() => {
          console.log('You have clicked me!');
        }}
      >
        CLICK ME!
      </ACButton>
    </>
  );
}

export default App;
