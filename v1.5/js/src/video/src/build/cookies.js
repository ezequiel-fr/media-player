
/**
 * Create and set cookie value
 * 
 * @param {String} name the cookie name.
 * @param {String} value his value.
 */

export function setCookie(name, value) {
    const date = new Date();
    
    date.setTime(date.getTime() + 3600);
    document.cookie = `${name}=${value};${date.toUTCString()};path=/`;
}
