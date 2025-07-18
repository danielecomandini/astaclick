import { Projector } from 'lucide-react';
import ACBadge from './UI/elements/ACBadge';

function App() {
  return (
    <div>
      <ACBadge counter={12} icon={Projector} color="black" />
    </div>
  );
}

export default App;
