import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import { HomePage, OfferPage } from './pages'

function App () {
  return (
    <div className='App w-screen h-screen overflow-scroll flex justify-center'>
      <Router>
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/offer'} element={<OfferPage />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
