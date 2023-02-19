import React from "react";

import { MdAddCircle } from "react-icons/md";

const AddRequestBtn = () => {
  return (
    <section className="flex items-center justify-between mt-2">
      <span className="font-medium text-base">Add Request</span>
      <MdAddCircle className="text-2xl cursor-pointer hover:text-eeRieBlack-500" />
    </section>
  );
};

export default AddRequestBtn;
