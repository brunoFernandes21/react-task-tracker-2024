import { createSlice } from "@reduxjs/toolkit";
import { allProjects } from "../../components/ProjectsData";

const initialState = allProjects;

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } =  projectsSlice.actions
export default projectsSlice.reducer;
