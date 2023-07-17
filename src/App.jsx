import './App.css'
import DataProvider from './context/DataProvider'
import Home from './pages/Home'

function App() {


  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  )
}

export default App
