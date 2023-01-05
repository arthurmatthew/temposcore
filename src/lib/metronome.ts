/**
 * Class representing a Metronome.
 */
export default class Metronome {
  timeSignature: Array<number>
  beatsPerMinute: number
  subdivision: number
  /**
   * Create a metronome.
   * @param {Array<number>} timeSignature - An array of numbers parameter, representing a time signature. The first item of the array is how many beats are in each measure. The second item of the array is how much each beat is worth. For example, in common time (4/4) represented as [4, 4] each measure has four beats with each beat being a quarter note. When left blank it defaults to common time.
   * @param {number} beatsPerMinute - A number parameter, representing a tempo in beats per minute (BPM). When left blank it defaults to 120 BPM.
   */
  constructor(
    timeSignature: Array<number> = [4, 4],
    beatsPerMinute: number = 120,
    subdivision: number = 4
  ) {
    this.timeSignature = timeSignature
    this.beatsPerMinute = beatsPerMinute
    this.subdivision = subdivision
  }

  get beatLength() {
    return ((60 / this.beatsPerMinute) * 1000) / (this.subdivision / 4)
  }
}
