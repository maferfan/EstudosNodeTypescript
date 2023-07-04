import { Router, Request, Response } from 'express'
import home from '../controllers/homeController'
const router = Router()

router.get('/', home)

router.get('/noticia/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.send(`Noticia: ${id}`)
})

export default router