import { t_CompleteForm } from '@/zod/fieldItem';
import React from 'react';

const FormItemButton = ({
  form,
  setForm,
  sectionId,
  fieldName,
  children,
  componentType
}: {
  form: t_CompleteForm;
  setForm: (e: t_CompleteForm) => void;
  sectionId: string;
  fieldName: string;
  children: React.ReactNode;
  componentType: string;
}) => {
  return (
    <button
      type='button'
      className='btn-primary btn-outline border-none btn h-fit py-3 justify-start'
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
                  componentType: componentType,
                  name: '',
                  label: '',
                  placeholder: '',
                  disabled: false,
                  hidden: false,
                  options: [],
                  validationRules: {}
                }
              }
            }
          }
        });
      }}
    >
      {children}
    </button>
  );
};

export default FormItemButton;
