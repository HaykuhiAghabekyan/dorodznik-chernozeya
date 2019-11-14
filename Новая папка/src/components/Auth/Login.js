import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {Form,Col,Button} from 'react-bootstrap'

import {LoginAction} from '../../actions/authActions';


class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();

    };
    handleClick = () => {
        this.props.LogIn(this.state);
        if (this.props.firebase.auth.uid){
            this.props.history.push('/');
        }

    };

    render() {

        if (this.props.auth.uid) return <Redirect to="/home"/>;
        return (
            <section className="row align-items-center m-0">


            <div className="container m-auto">

                    <Col md={7} className="m-auto bg-white p-5">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group >
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>

                            <Form.Group >
                                <Form.Control
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>


                            <Button variant="primary" type="submit" onClick={this.handleClick}>
                                Sign in
                            </Button>
                        </Form>
                    </Col>

            </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        registerError: state.login.authError
    }
}
const mapDispatchToProps = dispatch => {
    return {
        LogIn: (newUser) => dispatch(LoginAction(newUser)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(Login);