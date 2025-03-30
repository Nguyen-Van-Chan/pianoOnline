import { NotesMap } from '@/config/notes'

export default class AutoPlayService {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.currentNoteIndex = 0
    this.notes = []
    this.isPlaying = false
    this.tempo = 120
    this.interval = null
  }

  setTempo(tempo) {
    this.tempo = tempo
    if (this.isPlaying) {
      this.stop()
      this.play()
    }
  }

  play(notes) {
    this.notes = notes
    this.currentNoteIndex = 0
    this.isPlaying = true
    this.playNextNote()
  }

  stop() {
    this.isPlaying = false
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  playNextNote() {
    if (!this.isPlaying || this.currentNoteIndex >= this.notes.length) {
      this.stop()
      return
    }

    const noteName = this.notes[this.currentNoteIndex]
    const note = NotesMap.find(n => n.name === noteName)
    
    if (note) {
      const audio = new Audio(note.file)
      audio.play()
    }

    this.currentNoteIndex++
    
    // Tính thời gian giữa các nốt dựa trên tempo
    const interval = (60 / this.tempo) * 1000
    
    this.interval = setTimeout(() => {
      this.playNextNote()
    }, interval)
  }
} 