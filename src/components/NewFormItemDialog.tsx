'use client';
import { useState } from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

import Dialog from './Dialog';
import { AddressQuestionButton } from './formItems/AddressQuestion';
import { t_CompleteForm } from '@/zod/fieldItem';
import { Buttons } from './formItems';

const NewFormItemDialog = ({
  form,
  setForm,
  sectionId
}: {
  form: t_CompleteForm;
  setForm: (e: t_CompleteForm) => void;
  sectionId: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog
        open={open}
        handleClose={() => setOpen(false)}
        className='max-w-7xl'
      >
        <div className='w-full grid grid-cols-3 gap-3'>
          {Buttons.map((Button, key) => (
            <Button
              key={key}
              form={form}
              setForm={setForm}
              sectionId={sectionId}
              fieldName={Math.random().toString()}
            />
          ))}
        </div>
      </Dialog>
      <button
        onClick={() => setOpen(true)}
        className='btn btn-primary flex-1 btn-outline'
      >
        <DocumentTextIcon className='w-6 h-6' />
        <span>New Form Item</span>
      </button>
    </>
  );
};

export default NewFormItemDialog;
