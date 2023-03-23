
import Joi, { SchemaMap } from 'joi';
import { ValidationError } from 'shared/errors/ValidationError';

export const joi = Joi;
export function validate<T>(schemaMap: SchemaMap<T>, props: { [key in keyof T]: any }, origin = 'request') {
  const result = joi.object(schemaMap).validate(props, {
    abortEarly: false,
    presence: 'required',
  });

  if (result.error) {
    const details = result.error.details.map((d) => ({
      field: d.path.join('.'),
      message: d.message.replaceAll('"', ''),
    }));
    console.log('Validation error on: ' + origin, props, JSON.stringify(details, null, 2));
    throw new ValidationError(`Validation error on ${origin}`, details);
  }

  return result.value
}