import { createSlice, current } from '@reduxjs/toolkit'

import noteService from '../services/notes'


const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {

    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }


      console.log(current(state))


      return state.map(note =>
        note.id !== id ? note : changedNote
      )
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    }
  }
})


export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch(setNotes(notes))
  }
}

export const createNote = content => {
  // Inside your thunk function:
  return async (dispatch) => {
    // 1. Make API call
    const newNote = await noteService.createNew(content)
    // 2. When ready, dispatch a regular action
    dispatch(appendNote(newNote)) // This is a plain object action!
  }
}



export default noteSlice.reducer



/*

The Simple Truth About Redux Thunk
Without Thunk:

// Wait for API call in component
const newNote = await noteService.createNew(content)
// Then dispatch regular action
dispatch(createNote(newNote))


With Thunk:
// Just dispatch - the waiting happens inside the action creator
dispatch(createNote(content))

// Inside the thunk:
const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content) // Wait here instead
    dispatch(appendNote(newNote))
  }
}


It's Really Just Moving the await
*/