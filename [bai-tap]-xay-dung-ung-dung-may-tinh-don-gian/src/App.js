import {useState} from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(0 || "");
  const [secondNumber, setSecondNumber] = useState(0 || "");
  const [result, setResult] = useState(0 || "");

  const additionCalc = (firstNumber, secondNumber) => {
    setResult(firstNumber + secondNumber)
  }
  const subtractCalc = (firstNumber, secondNumber) => {
    setResult(firstNumber - secondNumber)

  }
  const multipleCalc = (firstNumber, secondNumber) => {
    setResult(firstNumber * secondNumber)

  }
  const divisionCalc = (firstNumber, secondNumber) => {
    secondNumber ?
        setResult(firstNumber / secondNumber) : setResult("NaN")

  }
  const modulusCalc = (firstNumber, secondNumber) => {
    secondNumber ?
        setResult(firstNumber % secondNumber) : setResult("NaN")

  }

  return (
      <div className={"calculator"} style={{padding: 20}}>
        <input type="number"
               value={firstNumber}
               onChange={event => setFirstNumber(+event.target.value)}
               placeholder="First Number"
        />
        <br/>
        <br/>
        <input type="number"
               value={secondNumber}
               onChange={event => setSecondNumber(+event.target.value)}
               placeholder="Second Number"

        />
        <p>Result: {result}</p>
        <button onClick={() => {
          additionCalc(firstNumber, secondNumber)
        }}>+
        </button>
        <button onClick={() => {
          subtractCalc(firstNumber, secondNumber)
        }}>-
        </button>

        <button onClick={() => {
          multipleCalc(firstNumber, secondNumber)
        }}>*
        </button>

        <button onClick={() => {
          divisionCalc(firstNumber, secondNumber)
        }}>/
        </button>

        <button onClick={() => {
          modulusCalc(firstNumber, secondNumber)
        }}>%
        </button>
      </div>


  )

}

export default App;