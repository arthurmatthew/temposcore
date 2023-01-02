export default class Metronome {
  timeSignature: Array<number>
  beatsPerMinute: number
  #interval?: number
  constructor(
    timeSignature: Array<number> = [4, 4],
    beatsPerMinute: number = 120
  ) {
    this.timeSignature = timeSignature
    this.beatsPerMinute = beatsPerMinute
  }

  tick() {
    console.log('Tick')
  }

  play() {
    if (this.#interval === undefined) {
      this.tick()
      this.#interval = setInterval(() => {
        this.tick()
      }, (60 / this.beatsPerMinute) * 1000)
    }
  }

  stop() {
    if (this.#interval !== undefined) clearInterval(this.#interval)
    this.#interval = undefined
  }
}
