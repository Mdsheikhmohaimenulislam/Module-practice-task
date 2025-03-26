import { useState } from "react"

export default function Runs(){
    const [runs,setRuns] = useState(0)

    const countRuns = () => {
        const countRuns = runs + 1
       return setRuns(countRuns)
    }


    const runsSubtraction = () => {
        if(runs > 0){
            const countSubtraction = runs - 1
             return setRuns(countSubtraction)
             }
       
    }


    const runsReset = () => {
        setRuns(0)       
    }
    return(
        <div className="card">
            <h1>Run Count: {runs}</h1>
            <button onClick={countRuns}>Single Runs</button>
            <button onClick={runsSubtraction}>Runs Subtraction</button>
            <button  onClick={runsReset}>Reset</button>
        </div>
    )
}