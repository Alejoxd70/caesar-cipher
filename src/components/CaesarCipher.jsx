import { useState } from "react";

const CaesarCipher = () => {

    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(3);
    const [outputText, setOutputText] = useState('');
    const [resultText, setResultText] = useState('');
    const [type, setType] = useState('');


    const handleEncrypt = () => {
        setResultText('Encrypted text:');
        setOutputText(caesarCipher(inputText, shift, type));
    };

    const handleDecrypt = () => {
        setResultText('Decrypted text:');
        const fixOutputText = caesarCipher(inputText, shift);
        setOutputText(caesarCipher(fixOutputText, -shift, type));
    };

    const caesarCipher = (text, shift, type ) => {
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

                // Normalize shift wrap around and convert back
                const encryptedCode = ((code - minCode + shift + range) % range) + minCode;

                
                // return String.fromCharCode(encryptedCode);
                // let binaryChar = String.fromCharCode(encryptedCode).charCodeAt(0).toString(2);
                // return binaryChar.padStart(8, '0');
                if (type === "binary") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(2).padStart(8, '0') + ' ';

                if (type === "decimal") return String.fromCharCode(encryptedCode).charCodeAt(0) + ' ';

                if (type === "octal") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(8) + ' ';

                if (type === "hexadecimal") return String.fromCharCode(encryptedCode).charCodeAt(0).toString(16) + ' ';

                if (type === "html") return '&#' + String.fromCharCode(encryptedCode).charCodeAt(0) + '; ';

                return String.fromCharCode(encryptedCode);
            }

            //Return the character without encrypting
            return char;
        });

        // Return the encrypted text
        return encryptedText.join('');
    };

    return (
        <>
            <h1 className="title">Caesar Cipher</h1>
            <h2 className="made-by">By Sebastian Alejandro Castañeda Beltran</h2>

            <div className="form-container content-center">
                <div className="form">
                    <div className="form-group">
                        <label>Text:</label>
                        {/* <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Enter your text"
                        /> */}
                        <textarea
                            name=""
                            id=""
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            cols={30}
                            rows={3}
                            placeholder="Enter your text"
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Shift:</label>
                        <input
                            type="number"
                            value={shift}
                            onChange={(e) => {
                                setShift(parseInt(e.target.value));
                                // if (e.target.value > 25) setShift(25)
                            }}
                        />
                    </div>
                        <select className="button" defaultValue="" onChange={e => setType(e.target.value)}>
                            <option value="" disabled>Encrypted Type</option>
                            <option value="text">Text</option>
                            <option value="binary">Binary</option>
                            <option value="decimal">Decimal</option>
                            <option value="octal">Octal</option>
                            <option value="hexadecimal">Hexadecimal</option>
                            <option value="html">Html</option>
                        </select>
                </div>
            </div>

            <div className="buttons">
                <button className="button" onClick={handleEncrypt}>Encrypt</button>
                <button className="button" onClick={handleDecrypt}>Decrypt</button>
            </div>

            <div className="content-center result-container">
                <div className="result">
                    {outputText &&
                        <>
                            <h2>{resultText}</h2>
                            <p>{outputText}</p>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export {
    CaesarCipher,
}