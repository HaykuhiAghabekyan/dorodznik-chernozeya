import React, { Component } from 'react';
import {SignUp} from '../../actions/authActions';
import { connect } from 'react-redux';
import { withRouter , Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {compose} from 'redux';
import {Form,Col,Button} from 'react-bootstrap'

import './Login.css';



class Registration extends Component {
    state = {
        email: '',
        password: '',
        name:'',
        lastname:''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();

    };
    handleClick = () => {

        let {name, lastname, email, password} = this.state;
        this.props.SignUp({
                    name: name,
                    lastname: lastname,
                    email: email,
                    password: password,
                    collection: 'users',
                });


        }

    render() {

        if(this.props.auth.uid) return <Redirect to="/home"/>
        return(
            <section className="row align-items-center m-0">


            <div className="container m-auto">

                    <Col md={7} className="m-auto bg-white p-5">
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group >
                                <Form.Control
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group >
                                <Form.Control
                                    id="lastname"
                                    type="text"
                                    placeholder="Enter lastname"
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
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
                                Sign up
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
        firebase: state.firebase,
        auth: state.firebase.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        SignUp: (credentials) => dispatch(SignUp(credentials)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(Registration);