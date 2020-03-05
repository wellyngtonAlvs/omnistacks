import express from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import DashboardController from './controllers/DashboardController';
import BookingController from './controllers/BookingController';
import SessionController from './controllers/SessionController';
import SpotController from './controllers/SpotController';
import ApprovalController from './controllers/ApprovalController';
import RejectionController from './controllers/RejectionController';

const routes = express.Router();
const upload = multer(uploadConfig); 

routes.post('/sessions', SessionController.store);

routes.get('/dashboard', DashboardController.show);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),  SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

export default routes;
