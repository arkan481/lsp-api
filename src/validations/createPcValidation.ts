import { object, number } from "yup";

const createProductValidationSchema = object()
  .shape({
    fixedCost: number().required(),
    productionQuantity: number().required(),
    variableCost: number().required(),
  })
  .noUnknown(true)
  .strict(true);

export default createProductValidationSchema;
