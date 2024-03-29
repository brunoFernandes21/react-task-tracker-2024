import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
      id: '1',
      person: "Tyler",
      title: "Mobile Navigation",
      due: "27th Feb",
      status: "complete",
    },
    {
      id: '2',
      person: "Danny",
      title: "Landing Page",
      due: "5th Mar",
      status: "ongoing",
    },
    {
      id: '3',
      person: "Bruno",
      title: "Sign up form",
      due: "25th Jan",
      status: "complete",
    },
    // {
    //   id: '4',
    //   person: "Raphael",
    //   title: "User authentication",
    //   due: "10th Feb",
    //   status: "overdue",
    // },
    // {
    //   id: '5',
    //   person: "Bruno",
    //   title: "Home Page Design",
    //   due: "10th April",
    //   status: "ongoing",
    // },
  ]
;

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
   postAdded: {
    reducer(state, action) {
      state.unshift(action.payload);
    },
    prepare (title, due, status, memberId) {
      return {
        payload: {
          id: nanoid(),
          title,
          due,
          status,
          memberId
        }
      }
    }
   }
  },
});

export const { postAdded } =  projectsSlice.actions
export default projectsSlice.reducer;
