import { useSelector } from "react-redux";
import { selectAllMembers } from "../teamMembers/teamMembersSlice";

const ProjectAuthor = ( { memberId } ) => {
    const teamMember = useSelector(selectAllMembers).find((member) => member.id === memberId )

  return (
    <div>
    {teamMember ? teamMember.name : "Unkown"}
    </div>
  )
}

export default ProjectAuthor
