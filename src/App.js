import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Jobs from './components/Jobs'
import About from './components/About'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Jobs />
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
    </>
  )
}

export default App
