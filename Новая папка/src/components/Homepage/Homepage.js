import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Component/Header';
import Steps from './Component/Steps';
import Actions from './Component/Actions';

import './Homepage.css';
export class Quastionnaire extends Component {

    render() {
        console.log(this.props.steps.length)
        let now = 100 / this.props.steps.length * (this.props.currentStep+1)
        return (
            <div className='container'>
                <Header now={now} />
                <Steps
                    steps={this.props.steps}
                    current={this.props.currentStep}
                    change={this.handleChange} />
                <Actions length={this.props.steps.lenght} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        currentStep: state.allsteps.currentStep,
        steps: state.allsteps.steps
    }

}
export default connect(mapStateToProps)(Quastionnaire);
