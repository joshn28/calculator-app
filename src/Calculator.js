import { useRef, useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState(0);
    const input = useRef(null);

    function changeResult(e) {
        const num = Number(input.current.value);
        const operation = e.target.textContent;

        switch (operation) {
            case "add":
                setResult(result + num);
                break;
            case "subtract":
                setResult(result - num);
                break;
            case "multiply":
                setResult(result * num);
                break;
            case "divide":
                if (num !== 0) {
                    setResult(result / num);
                }
                break;
            default:
                break;
        }
    }

    function resetInput() {
        input.current.value = "";
        input.current.focus();
    }

    return (
        <>
            <p>{result}</p>
            <input type="number" ref={input}></input>
            <div className="buttons">
                <button className="operator-btn" onClick={changeResult}>add</button>
                <button className="operator-btn" onClick={changeResult}>subtract</button>
                <button className="operator-btn" onClick={changeResult}>multiply</button>
                <button className="operator-btn" onClick={changeResult}>divide</button>
                <button className="reset-btn" onClick={resetInput}>reset input</button>
                <button className="reset-btn" onClick={() => setResult(0)}>reset result</button>
            </div>
        </>
    );
}

export default Calculator;