import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './Rotas/Rotas'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>,
)
