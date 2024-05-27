import React from "react";

const FormItemButton = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="btn-primary btn-outline border-none btn h-fit py-3 justify-start">
      <p>Text Field</p>
      <div className="w-full h-12 rounded-btn bg-base-200"></div>
    </div>
  );
};

export default FormItemButton;
