import './App.css'
import { useEffect, useRef } from 'react'
import {VatomIdentitySDK} from "@vatom/identity-sdk"


function App() {
  const divRef = useRef(null);

  const authority = "https://id.vatom.com"
  
  // Test with one of the following clientIds.
  // They are just an IDs; do not expose secrets in repo.
  // They are whitelisted for testing on localhost ports 3000, 8000, & 8080.
  // Dev server ports can be configured in '/id-demo/vite.config.ts'.
  
  //const clientId = "c8a80a8b11235f15" // Will Pulier
  const clientId = "64673d4cf19366e2" // Will Powell
  //const clientId = "dce3993b6a24c278" // Vatom Developer Playground

  const onLogin= (data) =>{
  	console.log('Show payload from Identity SDK:');
    console.log(data);
  }

  useEffect(() => {
    if(divRef.current){
      new VatomIdentitySDK(divRef.current, clientId, onLogin)
    }
  }, [divRef])

  return (
    <div className="App" ref={divRef}>

    </div>
  )
}

export default App
