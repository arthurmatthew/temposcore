import { useState } from 'react'
import Metronome from './lib/metronome'

export default function App() {
  const [metronome, setMetronome] = useState(new Metronome())

  return (
    <div>
      <h1>Metronome</h1>
      <input
        type="number"
        value={metronome.beatsPerMinute}
        onChange={(e) =>
          setMetronome(
            (metronome) =>
              ({
                ...metronome,
                beatsPerMinute: parseInt(e.currentTarget.value),
              } as Metronome)
          )
        }
      />
      <p>
        <input
          type="number"
          value={metronome.timeSignature[0]}
          onChange={(e) =>
            setMetronome(
              (metronome) =>
                ({
                  ...metronome,
                  timeSignature: [
                    parseInt(e.currentTarget.value),
                    metronome.timeSignature[1],
                  ],
                } as Metronome)
            )
          }
        />
        /
        <input
          type="number"
          value={metronome.timeSignature[1]}
          onChange={(e) =>
            setMetronome(
              (metronome) =>
                ({
                  ...metronome,
                  timeSignature: [
                    metronome.timeSignature[0],
                    parseInt(e.currentTarget.value),
                  ],
                } as Metronome)
            )
          }
        />
      </p>
      <input
        type="number"
        value={metronome.subdivision}
        onChange={(e) =>
          setMetronome(
            (metronome) =>
              ({
                ...metronome,
                subdivision: parseInt(e.currentTarget.value),
              } as Metronome)
          )
        }
      />
      <p>{metronome.beatLength} MS</p>
    </div>
  )
}
