import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import { HomePage, OfferPage } from './pages'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App w-screen h-screen overflow-scroll flex justify-center'>
        <Router>
          <Header />
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/offer'} element={<OfferPage />} />
          </Routes>
        </Router>

      </div>
    </QueryClientProvider>
  )
}

export default App
