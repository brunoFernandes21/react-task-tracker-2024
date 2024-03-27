import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./projectsSlice";

export const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    person: "",
    title: "",
    due: "",
    status: ""
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = formData.title;
    const content = formData.content;

    //check whether the fields are not empty
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }

    setFormData({
      title: "",
      content: "",
    });
  };

  return (
    <section className="form__section mt-14 lg:mx-52 relative bg-white text-slate-900">
      <h3 className="text-xl font-bold">Add a New Post</h3>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="person">Author</label>
          <input
            type="text"
            id="person"
            name="person"
            value={formData.person}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
          />
        </div>
        <div>
          <label htmlFor="content">Due date</label>
          <input
            type="date"
            id="due"
            name="due"
            value={formData.due}
            onChange={handleChange}
            placeholder="Enter project due date"
          />
        </div>
        <div>
        <label htmlFor="content">Status</label>

        </div>
        <button
          className={`text-white bg-black
          }`}
        >
          Save Project
        </button>
      </form>
    </section>
  );
};
