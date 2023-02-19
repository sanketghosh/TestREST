import { BsBoxArrowInUpRight } from "react-icons/bs";

const Header = () => {
  return (
    <header className="select-none text-eeRieBlack-400 px-3 md:px-5 mb-3 mt-2">
      <div className="flex justify-between items-center bg-cambridgeBlue-200 py-3 px-3 rounded-[4px]">
        <h1 className="text-xl md:text-2xl font-serif font-semibold cursor-pointer">
          TestREST
        </h1>
        <div className="text-xs sm:text-sm font-medium flex items-center gap-[1px] cursor-pointer">
          <span>read more</span>
          <BsBoxArrowInUpRight />
        </div>
      </div>
    </header>
  );
};

export default Header;
