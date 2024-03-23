import { MdMessage } from "react-icons/md";

const TeamMemberCard = ({ person }) => {
  return (
    <section className="bg-white text-black shadow-md rounded-lg ease-in duration-300 hover:scale-105 p-4 ">
      <section className="text-center ">
        <img className="inline-block h-[90px] w-[90px] rounded-full border-4 border-gray-300" src={`${person.avatar}`} alt={`pic of ${ person.name }`} />
      </section>
      <section>
        <div className="text-center pt-4"> {person.name}</div>
        <div className="text-gray-500 text-center">{person.role}</div>
      </section>
      <button className="flex justify-start items-center gap-2 pt-4">
        <MdMessage className="text-gray-500 text-2xl"/>
        <span className="text-gray-500 text-lg">Message</span>
      </button>
    </section>
  );
};

export default TeamMemberCard;
