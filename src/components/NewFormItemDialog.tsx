"use client";
import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

import Dialog from "./Dialog";
import FormItemButton from "./FormItemButton";

const NewFormItemDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog
        open={open}
        handleClose={() => setOpen(false)}
        className="max-w-7xl"
      >
        <div className="w-full grid grid-cols-3 gap-3">
          <FormItemButton />
          <FormItemButton />
          <FormItemButton />
          <FormItemButton />
          <FormItemButton />
          <FormItemButton />
        </div>
      </Dialog>
      <button onClick={() => setOpen(true)} className="btn btn-primary">
        <DocumentTextIcon className="w-6 h-6" />
        <span>New Form Item</span>
      </button>
    </>
  );
};

export default NewFormItemDialog;
