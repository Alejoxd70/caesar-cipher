
const caesarCipher = (text, shift, type ) => {
    // Array of characters
    const arrayChars = text.split('');

    // Encrypt each character
    const encryptedText = arrayChars.map(char => {

        // Get the ASCII code of the character
        const code = char.charCodeAt(0); 

        // Define the range of printable ASCII characters
        const minCode = 32; // Space character
        const maxCode = 126; // Tilde (~)
        const range = maxCode - minCode + 1; // 95 characters (32–126)

        // Check if the character is within the printable range
        if (code >= minCode && code <= maxCode) {

            // Normalize shift wrap around and convert back
            const encryptedCode = ((code - minCode + shift + range) % range) + minCode;

            // Validate the type of encryption
            const typeOfEncryptionChar = validateType(type, encryptedCode);

            return typeOfEncryptionChar;
        }

        //Return the character without encrypting
        return char;
    });

    // Return the encrypted text
    return encryptedText.join('');
};

const validateType = (type, encryptedCode) => {
    
    if (type === "binary") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(2).padStart(8, '0') + ' ';
    if (type === "decimal") return String.fromCharCode(encryptedCode).charCodeAt(0) + ' ';

    if (type === "octal") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(8) + ' ';

    if (type === "hexadecimal") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(16) + ' ';

    if (type === "html") return '&#' + String.fromCharCode(encryptedCode).charCodeAt(0) + '; ';

    return String.fromCharCode(encryptedCode);
}

export {
    validateType,
    caesarCipher
}