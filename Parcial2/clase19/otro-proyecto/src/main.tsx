import { createRoot } from 'react-dom/client'
import EjemploLLaves from './EjemploLlaves'
import Contador from './Contador'
import Saludos from './Saludos'
import TresEnRaya from './TresEnRaya'
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <>
    <EjemploLLaves />
    <hr />
    <Contador startsAt={10} />
    <hr />
    <Saludos nombre='Patricio' />
    <hr />
    <Saludos />
    <hr />
    <TresEnRaya />
  </>
)