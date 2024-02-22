import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='content'>
       <img className="card"src='/src/assets/logo.png'></img>
       <br/>
        <button onClick={() => location.href ="https://wa.me/5524992737930" }>
          <img className="button-logo" src='/src/assets/whats-logo.png'/>
         Whatsapp - Valença
        </button>
        <br/>
        <button onClick={() => location.href ="https://wa.me/553299539792" }>
          <img className="button-logo" src='/src/assets/whats-logo.png'/>
         Whatsapp - Juiz de Fora
        </button>
        <br/>
        <button onClick={() => location.href ="https://www.instagram.com/phoneaidbr/" }>
          <img className="button-logo" src='/src/assets/insta-logo.png'/>
         Instagram 
        </button>
        <br/>
        <button onClick={() => location.href="https://www.facebook.com/phoneaidbr" }>
          <img className="button-logo" src='/src/assets/face-logo.png'/>
         Facebook 
        </button>
        <br/>
        <button onClick={() => location.href = "http://maps.google.com/?q=Avenida Nilo Pecanha, 222 - Centro"}>
          <img className="button-logo" src='/src/assets/loc-logo.png'/>
         Localização - Valença
        </button>
        <br/>
        <button onClick={() => location.href = "http://maps.google.com/?q=Av. Getúlio Vargas, 353 - Centro - Loja 126"}>
          <img className="button-logo" src='/src/assets/loc-logo.png'/>
         Localização - Juiz de Fora
        </button>
        <br/>
        <button onClick={() => location.href ="https://wa.me/5524992737930"}>
          <img className="button-logo" src='/src/assets/whats-logo.png'/>
         Peças 
        </button>
    
      </div>
    </>
  )
}

export default App
