import { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(prev => prev + 1)
        }, 2000)
    })

               return (
        <div>
            <h1>{props.name}'s' Card is {count}</h1>
            <button>change Name to Esther</button>
        </div>
    )
}

export default Card;