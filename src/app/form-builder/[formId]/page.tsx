"use client";
import { useState } from "react";
import NewFormItemDialog from "@/components/NewFormItemDialog";

import { t_CompleteForm } from "@/zod/fieldItem";

export default function Page({ params }: { params: { formId: string } }) {
  const [form, setForm] = useState<t_CompleteForm>({
    id: params.formId,
    name: "",
    tenantId: "",
    sections: {},
  });
  return (
    <main className="flex flex-row flex-wrap justify-between p-2 gap-3">
      <div className="w-full flex flex-col gap-2">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          type="text"
          className="input input-lg text-4xl text-primary font-bold"
          placeholder="Form Name"
        />
      </div>
      {Object.keys(form.sections).map((sectionId) => {
        return (
          <div key={sectionId} className="w-full flex flex-col gap-2">
            <input
              key={sectionId}
              value={form.sections[sectionId].name}
              placeholder="section name"
              className="input input-lg text-xl text-accent w-full"
              onChange={(e) =>
                setForm({
                  ...form,
                  sections: {
                    ...form.sections,
                    [sectionId]: {
                      ...form.sections[sectionId],
                      name: e.target.value,
                    },
                  },
                })
              }
            />
            {Object.keys(form.sections[sectionId].fields).map((fieldId) => (
              <label key={fieldId} className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    Labels will be added eventually
                  </span>
                </div>
                <input
                  type="text"
                  placeholder={fieldId}
                  disabled
                  className="input input-bordered w-full"
                />
                <div className="label"></div>
              </label>
            ))}
            <NewFormItemDialog
              form={form}
              setForm={setForm}
              sectionId={sectionId}
            />
          </div>
        );
      })}
      <button
        type="button"
        className="btn btn-secondary flex-1"
        onClick={() =>
          setForm({
            ...form,
            sections: {
              ...form.sections,
              [Math.random().toString()]: {
                id: Math.random().toString(),
                name: "",
                fields: {},
              },
            },
          })
        }
      >
        Add Section
      </button>
      <button
        className="btn btn-primary flex-1"
        type="button"
        onClick={() => console.log(form)}
      >
        Log Form
      </button>
    </main>
  );
}
