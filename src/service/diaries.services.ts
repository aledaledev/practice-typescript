import diaryData from './diaries.json'
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const getEntryById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(elem => elem.id === id)
  if (entry != null) {
    const { comment, ...restOfElem } = entry
    return restOfElem
  }
  return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.random().toString(16).slice(2),
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromReq
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromReq
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isString = (str: string): boolean => {
  return typeof str === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

// entradas mas controladas
export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}
