export function getTime(tz) {
    return new Date().toLocaleString('ru-RU', {
        timeZone: tz,
        hourCycle: 'h23',
        timeStyle: 'short'
    })
}