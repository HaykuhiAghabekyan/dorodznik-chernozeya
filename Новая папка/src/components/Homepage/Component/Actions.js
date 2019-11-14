import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button, Col } from 'react-bootstrap';
import { changeStep } from '../../../actions/changeStepAction'

class Actions extends Component {
    constructor(props){
        super(props)
    }
    next = () => {
        this.props.changestep(1)
    }
    prev = () => {
        this.props.changestep(-1)
    }
    add = () => {
       alert('finish')
    }
    render() {
        console.log( this.props.length)
        const { current } = this.props
        return (
            <Row className="actions mt-5">

                {current !== 0 && <Col sm={2}>
                    <Button variant="warning" className='mr-3 ' onClick={this.prev}> &larr; Prev</Button>
                </Col>}
                {
                    current< 9 &&  <Col sm={2}>
                    <Button variant="warning" onClick={this.next}>Next &rarr;</Button>
                </Col>
                }
                {
                    current=== 9 &&  <Col sm={2}>
                    <Button variant="warning" onClick={this.add}>Finish</Button>
                </Col>
                }

            </Row>
        )
    }

}

function mapStateToProps(state) {
    return {
        current: state.allsteps.currentStep
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        changestep: (step) => dispath(changeStep(step))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Actions)