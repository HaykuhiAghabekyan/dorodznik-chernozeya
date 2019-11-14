import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {LogoutAction} from "./actions/authActions";
import {connect} from 'react-redux';
import Login from './components/Auth/Login';
import Quastionnaire from './components/Homepage/Homepage'
import Registration from "./components/Auth/Registration";


class App extends Component {
    componentWillUnmount(){
        this.props.LogoutAction();
    }
    render() {
        return (
            <Router>
                <div className="App">

                    <Switch>
                        <Route exact path='/home' component={Quastionnaire} />
                        <Route path='/login' component={Login} />
                        <Route path='/' component={Registration}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        LogoutAction: () => dispatch(LogoutAction()),
    }
}
export default connect(null,mapDispatchToProps)(App);

