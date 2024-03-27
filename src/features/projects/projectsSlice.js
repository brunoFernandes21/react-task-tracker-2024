import { createSlice} from "@reduxjs/toolkit";
import { allProjects } from "../../components/ProjectsData";


const initialState = allProjects

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    }
})


// export const {} =  postsSlice.actions
export default projectsSlice.reducer