/* eslint-disable */
/**
 * 本地储存操作
 * Luffy 2018-7-27
 */
const removeSession = (key) => {
    sessionStorage.removeItem(key)
}
const getSession = (key) => {
    return sessionStorage.getItem(key)
}
const setSession = (key, val) => {
    sessionStorage.setItem(key, val)
}



export default {
    removeSession,
    getSession,
    setSession,
}