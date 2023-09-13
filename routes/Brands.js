const express = require('express');
const { fetchBrands, createBrand } = require('../controller/Brand');

const router = express.Router();
//   /base is already added in base path
router.get('/',fetchBrands).post('/',createBrand);

exports.router = router;