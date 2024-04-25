import { useState } from "react"
import Button from "./Button"

const Counter=() => {
    const[countervalue,setcountervalue]=useState(0)

    const increment=() =>{
        setcountervalue(countervalue+1)
    }
    const decrement=() =>{
        setcountervalue(countervalue-1)
    }
    const reset=() =>{
        setcountervalue(0)
    }
    
    return <>

    <section className="mb-10 flex flex-col">
        <h2 className="text-2xl">
            Counter
        </h2>
        <p className="text-xl">{countervalue}</p>
            <div className="flex gap-4 mb-4 justify-center">
        <Button text="Increment" onClick={increment}></Button>
        <Button text="Decrement" onClick={decrement}></Button>
        </div>
        <div className="flex justify-center">
        <Button text="Reset" onClick={reset}></Button>
        </div>
    </section>
    </>
    }
    
export default Counter