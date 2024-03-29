import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/projectsSlice'
import teamMembersReducer from '../features/teamMembers/teamMembersSlice'


export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    teamMembers: teamMembersReducer
  }
})