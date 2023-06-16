import { configureStore } from '@reduxjs/toolkit'
import { employeReducer } from '../employe/employeSlice'
import { useDispatch } from 'react-redux'
import { tasksSliceReducer } from '../tasks/tasksSlice'
export const store = configureStore({
    reducer:{
        employe:employeReducer,
        tasks:tasksSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const usedispatch: () => AppDispatch = useDispatch 