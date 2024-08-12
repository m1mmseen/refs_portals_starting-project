import Player from './components/Player.jsx';
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge titel="Easy" targetTime={1}></TimerChallenge>
          <TimerChallenge titel="Not easy anymore" targetTime={5}></TimerChallenge>
          <TimerChallenge titel="Getting tough" targetTime={10}></TimerChallenge>
          <TimerChallenge titel="Pros only" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
