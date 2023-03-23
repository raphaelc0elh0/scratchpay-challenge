import { Router } from "express";
import docsRouter from './docs/router'

const router = Router()
export default router

router.get("/clinics", async (req, res) => {
  res.send(req.query)
})

router.use("/docs", docsRouter)
