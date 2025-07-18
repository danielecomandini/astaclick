import ACCol from './UI/elements/ACCol';
import ACRow from './UI/elements/ACRow';

function App() {
  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <ACRow container spacing={2}>
        <ACCol size={8}>Alto sinistra</ACCol>
        <ACCol size={4}>Alto destra</ACCol>
        <ACCol size={4}>Basso sinistra</ACCol>
        <ACCol size={8}>Basso destra</ACCol>
      </ACRow>
    </div>
  );
}

export default App;
