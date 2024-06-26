import { z } from "zod";

export const fieldItem = z.object({
  id: z.string(),
  name: z.string(),
  componentType: z.string(),
  label: z.string(),
  placeholder: z.string().nullable(),
  disabled: z.boolean(),
  hidden: z.boolean(),
  validationRules: z.object({}).nullable(),
  options: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nullable(),
});

export const CompleteForm = z.object({
  id: z.string(),
  name: z.string(),
  tenantId: z.string(),
  sections: z.record(
    z.string(),
    z.object({
      id: z.string(),
      name: z.string(),
      fields: z.record(z.string(), fieldItem),
    })
  ),
});

export type t_CompleteForm = z.infer<typeof CompleteForm>;
