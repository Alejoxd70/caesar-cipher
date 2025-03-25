import { useState } from "react";
import { caesarCipher } from "../logic/caesarCipher.js";

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

    

    return (
        <>
            <h1 className="title">Caesar Cipher</h1>
            <h2 className="made-by">By Sebastian Alejandro Castañeda Beltran</h2>

            <div className="form-container content-center">
                <div className="form">
                    <div className="form-group">
                        <label>Text:</label>
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

            {outputText && 
                <>
                    <div className="content-center result-container">
                        <div className="result">
                            <h2>{resultText}</h2>
                            <p>{outputText}</p>
                        </div>
                    </div>
                </>
            
            }

            
        </>
    )
}

export {
    CaesarCipher,
}