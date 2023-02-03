import { useState } from 'react'
import './App.css'

function App() {
  var [Pantalla1, setPantalla1] = useState(0)
  var pantalla3 = Pantalla1
    var [pantalla2, setpantalla2] = useState(0)
    var operador
    var valor
    //var [valor, setvalor] = useState(0)

    function Botones(props){
      if(props.boton == "1"){
        var valor = "1"
      }else if(props.boton == "2"){
        var valor = "2"
      }else if(props.boton == "3"){
        var valor = "3"
      }else if(props.boton == "4"){
        var valor = "4"
      }else if(props.boton == "5"){
        var valor = "5"
      }else if(props.boton == "6"){
        var valor = "6"
      }else if(props.boton == "7"){
        var valor = "7"
      }else if(props.boton == "8"){
        var valor = "8"
      }else if(props.boton == "9"){
        var valor = "9"
      }else if(props.boton == "0"){
        var valor = "0"
      }
      return(
            <button type="button" onClick={()=> setPantalla1(Pantalla1 + valor)}>{props.boton}</button>
      )
      console.log(pantalla2)
    }
    function Operaciones(props){
      if(props.operacion == "+"){
        pantalla2 = Pantalla1
        //console.log(pantalla2)
      }
      return(
        <>
        <button type="button" onClick={()=> setpantalla2(Pantalla1)}>{props.operacion}</button>
        </>
        
      )
      console.log(pantalla2)
  }
    function Pantalla(props){
        return(
            <p>{Pantalla1}</p>
        )
    }
    
    
    const mas=()=>{
        pantalla2 = pantalla
        
        operador="suma"
        pantalla=" "
    }
    const menos=()=>{
        pantalla2 = pantalla
        
        operador="resta"
        pantalla=" "
    }
    const multiplicacion=()=>{
        pantalla2 = pantalla
        
        operador="multiplicacion"
        pantalla=" "
    }
    const divicion=()=>{
        pantalla2 = pantalla
        operador="division"
        pantalla=" "
    }
    const igual=()=>{
        if(operador=="suma"){
            setValor(pantalla+pantalla2)
        }else if(operador=="resta"){
            setValor(pantalla2-pantalla)
        }else if(operador=="multiplicacion"){
            setValor(pantalla*pantalla2)
        }else if(operador=="division"){
            setValor(pantalla/pantalla2)
        }
    }

    return (
        <>
            <h3>Calculadora</h3>
             <Pantalla></Pantalla>
             <Botones boton="7">{valor}</Botones>
             <Botones boton="8">{valor}</Botones>
             <Botones boton="9">{valor}</Botones>
             <Botones boton="/"></Botones><br />
             <Botones boton="4">{valor}</Botones>
             <Botones boton="5">{valor}</Botones>
             <Botones boton="6">{valor}</Botones>
             <Botones boton="*"></Botones><br />
             <Botones boton="1">{valor}</Botones>
             <Botones boton="2">{valor}</Botones>
             <Botones boton="3">{valor}</Botones>
             <Botones boton="-"></Botones><br />
             <Botones boton="0">{valor}</Botones>
             <Botones boton=">"></Botones>
             <Botones boton="+" id="mas"></Botones>
             <Botones boton="=" ></Botones>
             
             
        </>
    )
}

export default App
