import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    person: "Tyler",
    title: "Mobile Navigation",
    due: "27th Feb",
    status: "complete",
    memberId: '2'
  },
  {
    id: "2",
    person: "Danny",
    title: "Landing Page",
    due: "5th Mar",
    status: "ongoing",
    memberId: '4'
  },
  {
    id: "3",
    person: "Bruno",
    title: "Sign up form",
    due: "25th Jan",
    status: "complete",
    memberId: '1'
  },
  {
    id: "4",
    person: "Raphael",
    title: "User authentication",
    due: "10th Feb",
    status: "overdue",
    memberId: '3'
  },
  {
    id: "5",
    person: "Bruno",
    title: "Home Page Design",
    due: "10th April",
    status: "ongoing",
    memberId: '1'
  },
];
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, due, status, memberId) {
        return {
          payload: {
            id: nanoid(),
            title,
            due,
            status,
            memberId,
          },
        };
      },
    },
    sortByTaskName(state, action) {
      return action.payload.map((payloadItem) => {
        let existingItem = state.find((item) => item.id === payloadItem.id)
        if(existingItem) {
          existingItem = payloadItem
        }
        return existingItem
      })
    },
    sortByMemberName(state, action) {
      console.log(action.payload);
      return action.payload.map((payloadItem) => {
        let existingItem = state.find((item) => item.id === payloadItem.id)
        if(existingItem) {
          existingItem = payloadItem
        }
        return existingItem
      })
    }

  },
});

export const { postAdded, sortByTaskName, sortByMemberName } = projectsSlice.actions;
export default projectsSlice.reducer;
