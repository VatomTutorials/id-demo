import './App.css'
import { useEffect, useRef } from 'react'
import {VatomIdentitySDK} from "@vatom/identity-sdk"


function App() {
  const divRef = useRef(null);

  const authority = "https://id.vatom.com"
  const clientId = "Xc4PN_Fri5WbrYokjbwg3" // Just an ID; do not expose secret in repo.

  const onLogin= (data) =>{
    console.log(data)
  }

  useEffect(() => {
    if(divRef.current){
      new VatomIdentitySDK(divRef.current, authority, clientId,onLogin)
    }
  }, [divRef])

  return (
    <div className="App" ref={divRef}>

    </div>
  )
}

export default App
