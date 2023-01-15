import MetronomeLayout from '../lib/metronome'
import './Metronome.css'

export default function Metronome({
  metronome,
}: {
  metronome: MetronomeLayout
}) {
  return (
    <div className="beats">
      {metronome.layout.map((x) => (
        <div className={`beat ${x.accented ? 'accented' : ''}`}></div>
      ))}
    </div>
  )
}
