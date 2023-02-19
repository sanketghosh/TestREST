import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const BlankBody = () => {
  return (
    <main className="flex-[3] bg-cambridgeBlue-200 h-[620px] rounded-[3px] shadow-sm shadow-hunterGreen-300 flex items-center justify-center select-none">
      <div className="flex items-center text-2xl text-eeRieBlack-300 gap-2">
        <BsFillArrowLeftCircleFill />
        <span className="font-medium">
          select a request from the left panel
        </span>
      </div>
    </main>
  );
};

export default BlankBody;
