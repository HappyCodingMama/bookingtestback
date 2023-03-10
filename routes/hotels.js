import express from 'express';
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel);

//update
router.put('/:id', verifyAdmin, updateHotel);

//delete
router.delete('/:id', verifyAdmin, deleteHotel);

//get
router.get('/find/:id', getHotel);

//get all

router.get('/', getHotels);
router.get('/countbycity', countByCity);
router.get('/countbytype', countByType);

export default router;
