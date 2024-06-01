import { cloud,minicloud,sun,minirain,rain,sunrain } from './ExportImg.js'

export const  weatherName = {
    'дымка': minicloud,
    'ясно': sun,
    'небольшая облачность':  cloud,
    'пасмурно': cloud,
    'облачно с прояснениями' : sunrain,
    'небольшой дождь':  minirain,
    'дождь':  rain,
    'переменная облачность':  cloud,
}