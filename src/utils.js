export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function deleteLocalStorage(key) {
    localStorage.removeItem(key)
}

export function xorEncrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

export function xorDecrypt(encrypted, key) {
    let output = '';
    for (let i = 0; i < encrypted.length; i++) {
        output += String.fromCharCode(encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}