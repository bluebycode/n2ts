
import * as bip39 from 'bip39';
import * as CryptoJS from 'crypto-js';

export function cipher(message: string, secretKey: string): string {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

export function decipher(encrypted: string, secretKey: string): string {
    const bytes  = CryptoJS.AES.decrypt(encrypted, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export function generateMnemonic(): string {
    return bip39.generateMnemonic();
}