import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Component/Intro/Intro';
import PlayerInfo from './Component/PlayerInfo/PlayerInfo';



function App() {

  const overflow = {
    overflow: 'hidden'
  }
  
  return (
    <div style={overflow}>
      <Intro></Intro>
      <PlayerInfo></PlayerInfo>
    </div>
  );
}

export default App;
