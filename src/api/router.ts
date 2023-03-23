import { Router } from "express";
import { ClinicsService, ListFilters } from "modules/clinics/service";
import { validate } from "shared/libs/joi";
import docsRouter from './docs/router'
import { ListFiltersSchemaMap } from "./schema";

const router = Router()
export default router

router.get("/clinics", async (req, res) => {
  const query = validate(ListFiltersSchemaMap, req.query)

  const service = new ClinicsService()
  const result = await service.list(query)

  res.send(result)
})

router.use("/docs", docsRouter)


