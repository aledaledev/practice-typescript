import * as diaryServices from '../service/diaries.services'
import { Request, Response } from 'express'

export const getSensitiveEntries = (_req: Request, res: Response): void => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
}

export const getById = (req: Request, res: Response): void => {
  const id = Number(req.params.id)
  res.send(diaryServices.getEntryById(id))
}

// ts actua de forma estatica no corrige lo que añade el usuario
export const postNewDiary = (req: Request, res: Response): void => {
  try {
    // const { date, weather, visibility, comment } = req.body
    const newDiaryEntry = diaryServices.toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
}
