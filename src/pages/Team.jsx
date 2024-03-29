import TeamMemberCard from "../components/TeamMemberCard";
import { useSelector } from "react-redux";
import { selectAllMembers } from "../features/teamMembers/teamMembersSlice";

const Team = () => {
  const teamMembers = useSelector(selectAllMembers)  
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Team</h1>
      <section className="grid gap-4 mt-10 grid-cols-2 md:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member}/>
        ))}
      </section>
    </main>
  );
};

export default Team;
