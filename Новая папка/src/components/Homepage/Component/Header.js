import React, { Component } from 'react';
import {Row,Col,ProgressBar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';

import { LogoutAction } from "../../../actions/authActions";
export class Header extends Component {
    constructor(props){
        super(props)
          this.state={
            now:this.props.now
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.now!==this.props.now){

          this.setState({now:nextProps.now });

        }
      }
      handleClick=()=>{
        this.props.logAuth()
        }
    render() {
      if (!this.props.auth.uid) return <Redirect to="/"/>;
      const {now}=this.state
        return (
            <div className="header">
                <Row className="align-items-center">
                    <Col>
                    <h1>patient questionnaire</h1>
                    </Col>
                    <Col>
                    <span>{`${now}%`}</span>
                    <ProgressBar now={now} />
                    <p onClick={this.handleClick}>logout</p>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = state => {
  return {
      auth: state.firebase.auth,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      logAuth: (newUser) => dispatch(LogoutAction(newUser)),
  }
}

export default   connect(mapStateToProps, mapDispatchToProps)(Header);

