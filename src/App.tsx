import Metronome from './lib/metronome'

export default function App() {
  const metronome = new Metronome()

  return (
    <div>
      <h1>Metronome</h1>
      <p>{metronome.beatsPerMinute} BPM</p>
      <p>
        {metronome.timeSignature[0]} / {metronome.timeSignature[1]}
      </p>
      <button onClick={() => metronome.play()}>Play</button>
      <button onClick={() => metronome.stop()}>Stop</button>
    </div>
  )
}
