import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ACText from './UI/elements/ACText';
import ACIcon from './UI/elements/ACIcon';
import { Home, Info } from 'lucide-react';
import ACButton from './UI/elements/ACButton';
import ACNotification from './UI/elements/ACNotification';
import { useState } from 'react';

function App() {
  const [showNotification, setShowNotification] = useState(false);

  const automaticallyHideNotificationHandler = () => {
    setShowNotification(false);
  };

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
        icon={Home}
        onClick={() => {
          setShowNotification(true);
        }}
      >
        CLICK ME!
      </ACButton>
      <ACNotification
        open={showNotification}
        icon={Info}
        onClose={automaticallyHideNotificationHandler}
        duration={1000}
      >
        Welcome!
      </ACNotification>
    </>
  );
}

export default App;
