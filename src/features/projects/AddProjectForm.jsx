import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./projectsSlice";
import { useSelector } from "react-redux";
import { selectAllMembers } from "../teamMembers/teamMembersSlice";

export const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    due: "",
    status: "",
    memberId: "",
  });

  const dispatch = useDispatch();
  const teamMembers = useSelector(selectAllMembers);

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
    const due = formData.due;
    const status = formData.status;
    const memberId = formData.memberId;

    //check whether the fields are not empty
    if (title && due && status && memberId) {
      dispatch(postAdded(title, due, status, memberId));
    }

    setFormData({
      title: "",
      due: "",
      status: "",
      memberId: "",
    });
  };

  const canSave =
    Boolean(formData.title) &&
    Boolean(formData.due) &&
    Boolean(formData.status) &&
    Boolean(formData.memberId);

  const memberOptions = teamMembers.map((member) => (
    <option key={member.id} value={member.id}>
      {member.name}
    </option>
  ));

  return (
    <section className="form__section mt-14 lg:mx-52 relative bg-white text-slate-900">
      <h3 className="text-xl font-bold">Add a New Post</h3>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
          />
        </div>
        <div>
          <label htmlFor="due">Due date</label>
          <input
            type="date"
            id="due"
            name="due"
            value={formData.due}
            onChange={handleChange}
            placeholder="Enter project due date"
            required
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Enter project status"
            required
          />
        </div>
        <div>
          <label htmlFor="assignTo">Assigned project to</label>
          <select
            name="memberId"
            id="assignTo"
            value={formData.memberId}
            onChange={handleChange}
            required
          >
            <option value="">Choose member</option>
            {memberOptions}
          </select>
        </div>
        <button
          disabled={!canSave}
          className={`  ${canSave ? "bg-black text-white" : "bg-gray-300"}
          }`}
        >
          Save Project
        </button>
      </form>
    </section>
  );
};
