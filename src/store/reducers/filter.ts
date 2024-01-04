import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  term?: string
  rate: 'priority' | 'status' | 'all'
  val?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  term: '',
  rate: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    editTermo: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    editFilter: (state, action: PayloadAction<FilterState>) => {
      state.rate = action.payload.rate
      state.val = action.payload.val
    }
  }
})

export const { editTermo, editFilter } = filterSlice.actions
export default filterSlice.reducer
