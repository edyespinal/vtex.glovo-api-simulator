import { Router } from 'express'
import { patchProduct } from '../controller'

const router = Router()

router.get('/', (req, res) => res.send('Glovo response simulator'))
router.patch('/stores/:storeId/products/:productId', patchProduct)

export default router
