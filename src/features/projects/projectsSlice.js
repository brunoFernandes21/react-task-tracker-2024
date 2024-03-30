import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
  {
    id: "1",
    person: "Tyler",
    title: "Mobile Navigation",
    due: "27th Feb",
    status: "complete",
    date: sub(new Date(), { minutes: 12 }).toISOString(),
    memberId: '2'
  },
  {
    id: "2",
    person: "Danny",
    title: "Landing Page",
    due: "5th Mar",
    status: "ongoing",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    memberId: '4'
  },
  {
    id: "3",
    person: "Bruno",
    title: "Sign up form",
    due: "25th Jan",
    status: "complete",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    memberId: '1'
  },
  {
    id: "4",
    person: "Raphael",
    title: "User authentication",
    due: "10th Feb",
    status: "overdue",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    memberId: '3'
  },
  {
    id: "5",
    person: "Bruno",
    title: "Home Page Design",
    due: "10th April",
    status: "ongoing",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
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
            date: new Date().toISOString(),
            due,
            status,
            memberId,
          },
        };
      },
    },
    sortByTaskName(state, action) {
      const sortedState =  action.payload.map((payloadItem) => {
        let existingItem = state.find((item) => item.id === payloadItem.id)
        if(existingItem) {
          existingItem = payloadItem
        }
        return existingItem
      })
      return sortedState
    },
    sortByMemberName(state, action) {
      const sortedState =  action.payload.map((payloadItem) => {
        let existingItem = state.find((item) => item.id === payloadItem.id)
        if(existingItem) {
          existingItem = payloadItem
        }
        return existingItem
      })
      return sortedState
    }

  },
});

export const { postAdded, sortByTaskName, sortByMemberName } = projectsSlice.actions;
export default projectsSlice.reducer;
