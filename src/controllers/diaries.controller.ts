import diaryData from '../service/diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'

// al crear datos
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

export const addEntry = (): undefined => undefined
