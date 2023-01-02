/**
 * Class representing a Metronome.
 */
export default class Metronome {
  timeSignature: Array<number>
  beatsPerMinute: number
  #interval?: number
  #audioCtx: AudioContext = new AudioContext()
  /**
   * Create a metronome.
   * @param {Array<number>} timeSignature - An array of numbers parameter, representing a time signature. The first item of the array is how many beats are in each measure. The second item of the array is how much each beat is worth. For example, in common time (4/4) represented as [4, 4] each measure has four beats with each beat being a quarter note. When left blank it defaults to common time.
   * @param {number} beatsPerMinute - A number parameter, representing a tempo in beats per minute (BPM). When left blank it defaults to 120 BPM.
   */
  constructor(
    timeSignature: Array<number> = [4, 4],
    beatsPerMinute: number = 120
  ) {
    this.timeSignature = timeSignature
    this.beatsPerMinute = beatsPerMinute
  }

  /**
   * Play a frequency.
   */
  #tick(): void {
    const oscillator = this.#audioCtx.createOscillator()
    oscillator.type = 'square'
    oscillator.frequency.value = 440 // freq in hertz
    oscillator.connect(this.#audioCtx.destination)
    // oscillator.onended = potential callback

    oscillator.start(0)
    setTimeout(() => oscillator.stop(), 100)
  }

  /**
   * Start the metronome.
   * @param {() => void} callback - A void function parameter. Run every time the metronome ticks.
   * @param {boolean} tick - A boolean parameter. If false, the tick function is disabled and only the callback will run. Useful if you want to use a custom noise.
   */
  start(callback?: () => void, tick?: boolean): void {
    if (this.#interval === undefined) {
      if (callback) callback()
      this.#tick()
      this.#interval = setInterval(() => {
        if (callback) callback()
        this.#tick()
      }, (60 / this.beatsPerMinute) * 1000)
    }
  }

  /**
   * Stop the metronome.
   */
  stop(): void {
    if (this.#interval !== undefined) {
      clearInterval(this.#interval)
      this.#interval = undefined
    }
  }
}
