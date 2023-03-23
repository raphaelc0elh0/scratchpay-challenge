import { Router } from "express";
import { ClinicsService, ListFilters } from "modules/clinics/service";
import docsRouter from './docs/router'

const router = Router()
export default router

router.get("/clinics", async (req, res) => {
  console.log(req.query)

  const service = new ClinicsService()
  const result = await service.list(req.query as ListFilters)

  res.send(result)
})

router.use("/docs", docsRouter)
