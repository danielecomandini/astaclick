import { Home } from 'lucide-react';
import ACChip from './UI/elements/ACChip';

function App() {
  return (
    <div>
      <ACChip icon={Home} iconPosition="right" color="red">
        Message here!
      </ACChip>
    </div>
  );
}

export default App;
