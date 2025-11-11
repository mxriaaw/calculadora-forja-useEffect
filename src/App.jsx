import { useState, useEffect } from 'react'
import Styles from './App.module.css'

function App() {
  
 const [n1, setN1] = useState()
 const [n2, setN2] = useState()
 const [respSoma, setRespSoma] = useState()
 const [respSub, setRespsub] = useState()
 const [respMult, setRespMult] = useState()
 const [respDiv, setRespDiv] = useState()

 const[error, setError] = useState()


 useEffect(() =>{
  if(n1 !== undefined && n2 !== undefined && !isNaN(n1)){
 setRespSoma(parseFloat(n1) + parseFloat(n2))

 setError('')
  }else{
    setError('digite valores numericos para calcular')
  }
 }, [n1, n2])



  return (
    <>
   <h1 className={Styles.title}>qualquer</h1>
   <p>{error}</p>
    <div className={Styles.wrap}>
      <input type="number" onChange={(e) => setN1(e.target.value)} value={''} placeholder=''/>
      <input type="number" onChange={(e) => setN2 (e.target.value)} value={''} placeholder=''/>
    </div>

    <div className={Styles.wrapResps}>
    <h2>resultado da soma</h2>
    <h3>{respSoma}</h3>
    </div>

    <div className={Styles.wrapResps}>
    <h2>resultado da subtracao</h2>
    <h3>{respSub}</h3>
    </div>

    <div className={Styles.wrapResps}>
      <h2>resultado da multiplicacao</h2>
      <h3>{respMult}</h3>
    </div>

    <div className={Styles.wrapResps}>
      <h2>resultado da divisao</h2>
      <h3>{respDiv}</h3>

    </div>
    </>
  )
}

export default App
