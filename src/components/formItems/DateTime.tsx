import FormItemButton from '../FormItemButton';
import { t_CompleteForm } from '@/zod/fieldItem';

export const DateTimeButton = ({
  form,
  setForm,
  sectionId,
  fieldName
}: {
  form: t_CompleteForm;
  setForm: (e: t_CompleteForm) => void;
  sectionId: string;
  fieldName: string;
}) => (
  <FormItemButton
    form={form}
    sectionId={sectionId}
    fieldName={fieldName}
    setForm={setForm}
    componentType='address'
  >
    <p>DateTime</p>
    <div className='w-full h-12 rounded-btn bg-base-200'></div>
  </FormItemButton>
);

export const DateTime = () => null;
