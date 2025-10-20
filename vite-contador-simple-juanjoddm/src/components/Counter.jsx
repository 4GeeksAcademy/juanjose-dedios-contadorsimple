import { useEffect, useState } from "react"
import './counter.css'
const Counter = (props) => {

    const [numero2, setNumero2] = useState(0)
    const [numero1, setNumero1] = useState(0)
    const [numero3, setNumero3] = useState(0)
    const [numero4, setNumero4] = useState(0)


    let aumentarNumero1 = () => {
        setNumero1(prev => prev + 1)
    }

    useEffect(() => {
        const intervalo = setInterval(aumentarNumero1, 50)
        return () => clearInterval(intervalo)
    }, [])


    useEffect(() => {
        if (numero1 == 10) {
            setNumero1(0)
            setNumero2(prev => prev + 1)
        }
        if (numero2 == 10) {
            setNumero2(0)
            setNumero3(prev => prev + 1)
        }
        if (numero3 == 10) {
            setNumero3(0)
            setNumero4(prev => prev + 1)
        }

    }, [numero1, numero2, numero3, numero4])



    return (
        <div className="back  m-3 d-flex justify-content-center flex-column">
            <div className="mb-3 title d-flex align-items-center justify-content-center">
                <p className="titulo">Contador simple</p>
            </div>
            <div className="d-flex align-items center justify-content-center">

            <div className="crono d-flex flex-row justify-content-between w-50 align-items-center">
                <div className="clock">
                    <i class=" fa-regular fa-clock  "></i>
                </div>
                <div className="num1">
                    <p className="num border-1"> {numero4}   </p>
                </div>
                <div className="num2">

                    <p className="num border-1"> {numero3} </p>
                </div>
                <div className="num3">

                    <p className="num border-1"> {numero2} </p>
                </div>
                <div className="num4">

                    <p className="num border-1"> {numero1} </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Counter
