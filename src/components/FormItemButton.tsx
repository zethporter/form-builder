import { t_CompleteForm } from "@/zod/fieldItem";
import React from "react";

const FormItemButton = ({
  form,
  setForm,
  sectionId,
  fieldName,
  children,
}: {
  form: t_CompleteForm;
  setForm: (e: t_CompleteForm) => void;
  sectionId: string;
  fieldName: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      className="btn-primary btn-outline border-none btn h-fit py-3 justify-start"
      onClick={() => {
        setForm({
          ...form,
          sections: {
            ...form.sections,
            [sectionId]: {
              ...form.sections[sectionId],
              fields: {
                ...form.sections[sectionId].fields,
                [fieldName]: {
                  id: fieldName,
                  componentType: "text",
                  name: "",
                  label: "",
                  placeholder: "",
                  disabled: false,
                  hidden: false,
                  options: [],
                  validationRules: {},
                },
              },
            },
          },
        });
      }}
    >
      <p>Text Field</p>
      <div className="w-full h-12 rounded-btn bg-base-200"></div>
    </button>
  );
};

export default FormItemButton;
