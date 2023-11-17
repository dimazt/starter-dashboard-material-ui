
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SidebarWithSearch } from './components/Sidebar/SidebarWithSearch'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
