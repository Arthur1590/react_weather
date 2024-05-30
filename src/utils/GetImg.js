import { cloud,minicloud,sun,minirain,rain,sunrain } from './exportImg'

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