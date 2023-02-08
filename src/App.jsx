import { useState } from 'react'
import './App.css'

function App() {
  var [Pantalla1, setPantalla1] = useState(0)
  var [pantalla2, setpantalla2] = useState(0)
  var total
  var [operador, setoperador] = useState(0)
  //var operador
  var valor

    function Botones(props){
      if(props.boton == "1"){
        var valor = '1'
      }else if(props.boton == "2"){
        var valor = '2'
      }else if(props.boton == "3"){
        var valor = '3'
      }else if(props.boton == "4"){
        var valor = '4'
      }else if(props.boton == "5"){
        var valor = '5'
      }else if(props.boton == "6"){
        var valor = '6'
      }else if(props.boton == "7"){
        var valor = '7'
      }else if(props.boton == "8"){
        var valor = '8'
      }else if(props.boton == "9"){
        var valor = '9'
      }else if(props.boton == "0"){
        var valor = '0'
      }
      return(
            <button  onClick={()=> setPantalla1(Pantalla1 + valor)}>{props.boton}</button>
      )
    }
    function Eliminar(props){
      return(
        <>
        <button onClick={()=> setPantalla1(0)+ setpantalla2(0)}>{props.eli}</button>
        </>
        
      )
    }
    function Operaciones(props){
      // if(props.operacion == "+"){
      //   setoperador(props.operacion);
      // }else if(props.operacion == "-"){
      //   setoperador(props.operacion);
      // }else if(props.operacion == "*"){
      //   setoperador("*");
      // }else if(props.operacion == "/"){
      //   setoperador(props.operacion);
      // }
      return(
        <>
        <button  onClick={()=> setpantalla2(Pantalla1)+setPantalla1(0)+setoperador(props.operacion)}>{props.operacion}</button>
        </>
      )      
  }
  function Igual(props){
    if(operador == "+"){
      total = parseInt(pantalla2)+parseInt(Pantalla1)
    }else if(operador == "-"){
      total = parseInt(pantalla2)-parseInt(Pantalla1)
    }else if(operador == "*"){
      total = parseInt(pantalla2)*parseInt(Pantalla1)
    }else if(operador == "/"){
      total = parseInt(pantalla2)/parseInt(Pantalla1)
    }
    return(
      <>
      <button  onClick={()=>setPantalla1(total)}>{props.operacion}</button>
      </>
    )
  }
    function Pantalla(props){
        return(
          <>
          <p >{pantalla2}</p>
          <p>{Pantalla1}</p>
          </>
            
        )
    }

    return (
        <>
            <h3>Calculadora</h3>
             <Pantalla></Pantalla>
             <Botones boton="7">{valor}</Botones>
             <Botones boton="8">{valor}</Botones>
             <Botones boton="9">{valor}</Botones>
             <Operaciones operacion="/" id="/"></Operaciones><br />
             <Botones boton="4">{valor}</Botones>
             <Botones boton="5">{valor}</Botones>
             <Botones boton="6">{valor}</Botones>
             <Operaciones operacion="*" id="*"></Operaciones><br />
             <Botones boton="1">{valor}</Botones>
             <Botones boton="2">{valor}</Botones>
             <Botones boton="3">{valor}</Botones>
             <Operaciones operacion="-" id="-"></Operaciones><br />
             <Botones boton="0">{valor}</Botones>
             <Eliminar eli=">"></Eliminar>
             <Operaciones operacion="+" id="+"></Operaciones>
             <Igual operacion="=" id="igual"></Igual>
        </>
    )
}

export default App
