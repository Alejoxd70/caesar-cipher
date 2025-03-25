const caesarCipher = (text, shift) => {
    // Array of characters
    const arrayChars = text.split('');


// Encrypt each character
const encryptedText = arrayChars.map(char => {

    // // Check if it is a letter
    // if (char.match(/[a-z]/i)) {

    //     // ASCII code of the character
    //     const code = char.charCodeAt(0);

    //     // Uppercase or lowercase
    //     const shiftAmount = code >= 65 && code <= 90 ? 65 : 97;

    //     // Encrypt the character with the shift
    //     const encryptedChar = ((code - shiftAmount + shift + 26) % 26) + shiftAmount;

    //     return String.fromCharCode(encryptedChar);
    // }
    // return char;

    // Get the ASCII code of the character
    const code = char.charCodeAt(0); 

    // Define the range of printable ASCII characters
    const minCode = 32; // Space character
    const maxCode = 126; // Tilde (~)
    const range = maxCode - minCode + 1; // 95 characters (32–126)

    // Check if the character is within the printable range
    if (code >= minCode && code <= maxCode) {
        // Normalize, shift, wrap around, and convert back
        const encryptedCode = ((code - minCode + shift + range) % range) + minCode;
        return String.fromCharCode(encryptedCode);
    }

    //Return the character without encrypting
    return char;
});

// Return the encrypted text
return encryptedText.join('');
};

const text = caesarCipher("hello word", 3);

console.log(text);
