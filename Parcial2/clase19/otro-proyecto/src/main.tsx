import { createRoot } from 'react-dom/client'
import EjemploLLaves from './EjemploLlaves'
import Contador from './Contador'

createRoot(document.getElementById('root')!).render(
  <>
    <EjemploLLaves />
    <hr/>
    <Contador />
  </>
)