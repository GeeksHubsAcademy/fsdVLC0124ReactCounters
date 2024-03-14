
import { useState, useEffect } from 'react';

import "./Counter.css";

export const Counter = () => {

    //1 - Hooks de estado
    const [count, setCount] = useState(0)

    //3 - Funciones useEffect

    // useEffect(() => {
    //     //Soy el useEffect que se ejecuta cuando se monta el componente
    //     console.log("soy el componente Counter y me acabo de montar");
    // }, [])

    // useEffect(() => {
    //     //Soy el useEffect que se ejecuta cuando se actualiza el componente
    //     console.log("Soy el useEffect de actualización")
    // })

    useEffect(() => {
        //Soy el useEffect que se ejecutará siempre que cambie count
        // console.log("Soy el useEffect de count y count vale.....", count)
    }, [count])

    

    //2 - Zona de renderizado o return...
    return(
        <div onClick={() => setCount(count + 1)}>
            {/* soy un comentario */}
            number: {count}
        </div>
    )
}