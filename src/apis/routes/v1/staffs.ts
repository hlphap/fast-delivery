import { Router } from 'express';
import { staffControllers } from '../../controllers';

const router = Router();

router.get('/', staffControllers.getStaffs);
router.post('/', staffControllers.createStaff);
router.put('/:staffID', staffControllers.updateStaff);
router.delete('/:staffID', staffControllers.deleteStaff);
router.get('/:staffID/orders', staffControllers.getOrdersFromStaff);

export default router;
