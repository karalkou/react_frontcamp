import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import AdminPage from './routes/Admin'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <Route path = '/admin' component = {AdminPage}/>
            </div>
        )
    }
}

export default App