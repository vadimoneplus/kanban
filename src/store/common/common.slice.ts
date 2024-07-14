import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_Dark_KEY = 'dk'

interface KanbanState {
  isDark: boolean
}

const initialState: KanbanState = {
  isDark: JSON.parse(localStorage.getItem(LS_Dark_KEY) ?? 'false')
}

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    toggleDark(state, action: PayloadAction<boolean>) {
      state.isDark = !action.payload
      localStorage.setItem(LS_Dark_KEY,JSON.stringify(state.isDark))
    }
  }
})

export const kanbanAction = kanbanSlice.actions
export const kanbanReduser = kanbanSlice.reducer