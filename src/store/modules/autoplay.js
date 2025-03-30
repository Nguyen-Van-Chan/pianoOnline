const SET_IS_PLAYING = 'SET_IS_PLAYING'
const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'
const SET_TEMPO = 'SET_TEMPO'

const state = {
  isPlaying: false,
  currentNote: null,
  tempo: 120, // BPM (beats per minute)
  currentScore: null,
  currentNoteIndex: 0,
  playInterval: null
}

const mutations = {
  [SET_IS_PLAYING](state, isPlaying) {
    state.isPlaying = isPlaying
  },
  [SET_CURRENT_NOTE](state, note) {
    state.currentNote = note
  },
  [SET_TEMPO](state, tempo) {
    state.tempo = tempo
  }
}

const actions = {
  $startPlaying({ commit, state, dispatch }, score) {
    commit(SET_IS_PLAYING, true)
    state.currentScore = score
    state.currentNoteIndex = 0
    dispatch('playNextNote')
  },
  
  $stopPlaying({ commit, state }) {
    commit(SET_IS_PLAYING, false)
    commit(SET_CURRENT_NOTE, null)
    if (state.playInterval) {
      clearInterval(state.playInterval)
      state.playInterval = null
    }
  },

  playNextNote({ commit, state, dispatch }) {
    if (!state.isPlaying || !state.currentScore || state.currentNoteIndex >= state.currentScore.length) {
      dispatch('$stopPlaying')
      return
    }

    const note = state.currentScore[state.currentNoteIndex]
    commit(SET_CURRENT_NOTE, note)
    state.currentNoteIndex++

    // Tính thời gian giữa các nốt dựa trên tempo
    const interval = (60 / state.tempo) * 1000

    state.playInterval = setTimeout(() => {
      dispatch('playNextNote')
    }, interval)
  },

  $setTempo({ commit, state, dispatch }, tempo) {
    commit(SET_TEMPO, tempo)
    if (state.isPlaying) {
      dispatch('$stopPlaying')
      dispatch('$startPlaying', state.currentScore)
    }
  }
}

const getters = {
  $isPlaying: state => state.isPlaying,
  $currentNote: state => state.currentNote,
  $tempo: state => state.tempo
}

export default {
  state,
  mutations,
  actions,
  getters
} 