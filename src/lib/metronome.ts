export default class MetronomeLayout {
  bpm: number
  keySignature: [number, number]
  subdivision: number
  accentMode: keyof AccentMode
  #playing: boolean = false
  constructor(
    bpm: number = 120,
    keySignature: [number, number] = [4, 4],
    subdivison: number = 4,
    accentMode: keyof AccentMode = 'first'
  ) {
    this.bpm = bpm
    this.keySignature = keySignature
    this.subdivision = subdivison
    this.accentMode = accentMode
  }

  public get layout(): Beat[] {
    let result: Beat[] = []
    for (let i = 0; i < this.keySignature[0] * (this.subdivision / 4); i++) {
      result.push(
        new Beat(
          this.keySignature[1] * (this.subdivision / 4),
          i + 1,
          i == 0 ? true : false,
          new AccentMode(i + 1, this.keySignature[0])[this.accentMode]
        )
      )
    }
    return result
  }
}

class AccentMode {
  #beat: number
  #beats: number
  constructor(beat: number, beats: number) {
    this.#beat = beat
    this.#beats = beats
  }
  get first() {
    if (this.#beat == 1) {
      return true
    }
    return false
  }
  get last() {
    if (this.#beat - this.#beats == 0) {
      return true
    }
    return false
  }
  get odd() {
    if (this.#beat % 2) {
      return true
    }
    return false
  }
  get even() {
    if (this.#beat % 2) {
      return false
    }
    return true
  }
}

class Beat {
  value: number
  beat: number
  playing: boolean
  accented: boolean
  constructor(
    value: number,
    beat: number,
    playing: boolean = false,
    accented: boolean = false
  ) {
    this.value = value
    this.beat = beat
    this.playing = playing
    this.accented = accented
  }
}
