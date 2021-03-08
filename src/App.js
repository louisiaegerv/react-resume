import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
