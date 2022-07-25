function Calculator(
                {

                    addFunc,
                    subFunc,
                    multiFunc,
                    divFunc
                    }) {

    return (
        <div className="calculator">
            <input id="firstNumber" type="number" />
            <input id="secondNumber" type="number" />
            <p>Result:</p> <span id="result"/>
            <button onClick={addFunc} id="add">+</button>
            <button onClick={subFunc} id="sub">-</button>
            <button onClick={multiFunc} id="multi">*</button>
            <button onClick={divFunc} id="div">/</button>
        </div>
    )

}

export default Calculator;