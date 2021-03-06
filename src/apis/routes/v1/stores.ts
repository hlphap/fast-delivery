import { Router } from 'express';
import { storeControllers } from '../../controllers';

const router = Router();

router.get('/', storeControllers.getStores);
router.get('/:storeID', storeControllers.getStore);
router.post('/', storeControllers.createStore);
router.post('/login', storeControllers.login);
router.put('/:storeID', storeControllers.updateStore);
router.delete('/:storeID', storeControllers.deleteStore);
router.get('/:storeID/statistics', storeControllers.getStatistics);
router.get('/:staffID/orders', storeControllers.getOrdersFromStore);

export default router;
