import { fakeRequestData } from "../data/sampleData";
import { AddRequestBtn, RequestCard } from "./UI";

const LeftBar = () => {
  return (
    <main className="bg-cambridgeBlue-200 text-eeRieBlack-400 flex-[0.85] rounded-[4px] select-none shadow-sm shadow-hunterGreen-300 h-[620px] overflow-scroll">
      <div className="px-3 py-4 flex flex-col gap-3">
        <AddRequestBtn />
        <hr className="mt-2 border-[1px] border-cambridgeBlue-400" />
        <div className="py-2 gap-3 flex flex-col">
          {fakeRequestData.map((req) => (
            <RequestCard
              key={req.id}
              title={req.requestTitle}
              type={req.requestType}
              url={req.requestURL}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LeftBar;
