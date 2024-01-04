import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      description: 'Watch course',
      priority: enums.Priority.NORMAL,
      status: enums.Status.DONE,
      title: 'Study TS'
    },
    {
      id: 2,
      description: 'Watch course',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDENT,
      title: 'Study Angular'
    },
    {
      id: 3,
      description: 'Watch course',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDENT,
      title: 'Study Kotlin'
    }
  ]
}

const tasksSlices = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (task) => task.id !== action.payload
        ))
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexTask = state.itens.findIndex((t) => t.id === action.payload.id)
      if (indexTask >= 0) {
        state.itens[indexTask] = action.payload
      }
    },
    signup: (state, action: PayloadAction<Task>) => {
      const alreadyExists = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (alreadyExists) {
        alert('Existing task !')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remove, edit, signup } = tasksSlices.actions
export default tasksSlices.reducer
