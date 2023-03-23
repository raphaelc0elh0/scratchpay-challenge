import express, { Router } from "express";
import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

const router = Router()
export default router

router.get('/api.yml', async (req, res) => {
  const api = await fs.readFile(path.join(__dirname, 'docs.yml'), 'utf-8');
  const doc = YAML.parse(api);
  res.send(YAML.stringify(doc));
});

router.use(express.static(__dirname));