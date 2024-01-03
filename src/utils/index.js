export const getDefaultDate = (date=new Date()) => {
    const dateString = `${date.getFullYear()}-${getPrefix(date.getMonth()+1)}-${getPrefix(date.getDate())}`
    return dateString
}

const getPrefix = (value) => {
    if(value < 10){
        return '0'+value
    }
    return value
}