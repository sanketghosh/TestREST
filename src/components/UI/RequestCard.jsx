import { AiTwotoneDelete } from "react-icons/ai";

const RequestCard = ({ title, type, url }) => {
  return (
    <section className="bg-hunterGreen-400 py-[10px] px-2 rounded-[3px] text-cambridgeBlue-100 cursor-pointer hover:bg-hunterGreen-600 transition">
      <div className="flex items-center justify-between">
        <span className="text-base capitalize font-medium">{title}</span>
        <AiTwotoneDelete className="text-xl text-cambridgeBlue-200 transition hover:text-orange-600" />
      </div>
      <div className="flex gap-2 text-sm mt-2">
        <span className="uppercase">{type}</span>
        <p className="lowercase">{url}</p>
      </div>
    </section>
  );
};

export default RequestCard;
