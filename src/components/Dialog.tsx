import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Dialog = ({
  open,
  handleClose,
  className,
  children,
}: {
  open: boolean;
  handleClose: () => void;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={twMerge(clsx("modal", open && "modal-open"))}>
    <div className={twMerge(clsx("modal-box", className))}>
      <div></div>
      {children}
    </div>
    <div onClick={handleClose} className="modal-backdrop">
      <button>close</button>
    </div>
  </div>
);

export default Dialog;
