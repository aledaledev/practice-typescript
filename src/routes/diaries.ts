import express from 'express'
import { getById, getSensitiveEntries, postNewDiary } from '../controllers/diaries.controller'

const router = express.Router()

router.get('/', getSensitiveEntries)

router.post('/', postNewDiary)

router.get('/:id', getById)

export default router
