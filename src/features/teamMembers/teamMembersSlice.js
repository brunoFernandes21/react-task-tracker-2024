import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        name: 'Bruno Fernandes',
        role: 'Full Stack Developer',
        avatar: "/member5.jpg"
    },
    {
        id: '2',
        name: 'Tyler Brook',
        role: 'Frontend Developer',
        avatar: "/member2.jpg"
    },
    {
        id: '3',
        name: 'Rafael Lima',
        role: 'Full Stack Software Engineer',
        avatar: "/member4.jpg"
    },
    {
        id: '4',
        name: 'Danny Stewart',
        role: 'UX Designer Developer',
        avatar: "/member1.jpg"
    },
]

const teamMembersSlice = createSlice({
    initialState,
    name: 'teamMembers',
    reducers: {}
})

export const selectAllMembers = (state) => state.teamMembers
export default teamMembersSlice.reducer