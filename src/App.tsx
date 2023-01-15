import Metronome from './components/Metronome'
import MetronomeLayout from './lib/metronome'

export default function App() {
  const metronome = new MetronomeLayout(120, [3, 4], 4, 'last')
  return (
    <div>
      <p>{JSON.stringify(metronome.layout)}</p>
      <Metronome metronome={metronome} />
      <button>Click</button>
    </div>
  )
}
