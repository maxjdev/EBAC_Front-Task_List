import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlices = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Study JavaScript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      'video 1',
      1
    ),
    new Task(
      'Study Typescript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      'video 2',
      2
    ),
    new Task(
      'Study Angular',
      enums.Priority.IMPORTANT,
      enums.Status.PENDENT,
      'video 3',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlices.actions
export default tasksSlices.reducer
