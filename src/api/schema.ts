import { SchemaMap } from "joi";
import { ListFilters } from "modules/clinics/service";
import { joi } from "shared/libs/joi";
import states from "utils/states";

const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/

export const ListFiltersSchemaMap: SchemaMap<ListFilters, true> = {
  type: joi.string().valid('vet', 'dental'),
  name: joi.string().trim().optional(),
  state: joi.string().valid(...Object.keys(states)).optional(),
  available_at: joi.string().regex(timeRegex).optional()
}