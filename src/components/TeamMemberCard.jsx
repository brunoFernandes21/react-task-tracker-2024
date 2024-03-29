import { MdMessage } from "react-icons/md";

const TeamMemberCard = ({ member }) => {
  return (
    <section className="bg-white text-black shadow-md rounded-lg ease-in duration-300 hover:scale-105 p-4 ">
      <section className="text-center ">
        <img className="inline-block h-[110px] w-[110px] rounded-full border-4 border-gray-300" src={`${member.avatar}`} alt={`pic of ${ member.name }`} />
      </section>
      <section>
        <div className="text-center pt-4"> {member.name}</div>
        <div className="text-gray-500 text-center">{member.role}</div>
      </section>
      <button className="flex justify-start items-center gap-2 pt-4">
        <MdMessage className="text-gray-500 text-2xl"/>
        <span className="text-gray-500 text-lg">Message</span>
      </button>
    </section>
  );
};

export default TeamMemberCard;
