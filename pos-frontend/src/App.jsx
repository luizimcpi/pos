import { Auth, Home, Orders } from './pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Header from './components/shared/Header'
import Tables from './pages/Tables'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
