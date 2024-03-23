import { useState } from "react";
import { allTeamMembers } from "../components/TeamMembers";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState(allTeamMembers);
  return (
    <main className="mt-10">
      <h1 className="text-lg text-gray-500">Team</h1>
      <section className=""></section>
    </main>
  );
};

export default Team;
