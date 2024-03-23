import { useState } from "react";
import { allTeamMembers } from "../components/TeamMembers";
import TeamMemberCard from "../components/TeamMemberCard";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(allTeamMembers);
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Team</h1>
      <section className="grid gap-4 mt-5 grid-cols-2 md:grid-cols-4">
        {teamMembers.map((person) => (
          <TeamMemberCard key={person.id} person={person}/>
        ))}
      </section>
    </main>
  );
};

export default Team;
