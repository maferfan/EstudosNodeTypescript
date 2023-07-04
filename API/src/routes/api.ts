import {Router} from 'express'
import { createPhrase, deletePhrase, findAllPhrases, randomPhrase, updatePhrase } from '../controllers/apiController'

const router = Router()

router.get('/frases', findAllPhrases)
router.get('/frases/frasealeatoria', randomPhrase)

router.post('/frases', createPhrase)

router.put('/frases/:id', updatePhrase)

router.delete('/frases/:id', deletePhrase)


export default router