export const getDefaultDate = () => {
    const date = new Date()
    const dateString = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    return dateString
}