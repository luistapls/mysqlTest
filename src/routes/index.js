const express = require('express');
const router = express.Router();

const {
  returnAllCarreras,
  returnAllMaterias,
  returnAllEstudiantes,
} = require('../utils/index');

router.get('/carreras', async (_req, res) => returnAllCarreras(res));
router.get('/materias', async (_req, res) => returnAllMaterias(res));
router.get('/estudiantes', async (_req, res) => returnAllEstudiantes(res));

module.exports = router;
