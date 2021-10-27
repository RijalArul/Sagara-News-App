import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Switch, Route } from 'react-router'
import DetailPage from './Pages/DetailPage'
import LoginPage from './Pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <ToastContainer autoClose={1500} />
      <Switch>
        <Route path='/detail/:name'>
          <DetailPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
