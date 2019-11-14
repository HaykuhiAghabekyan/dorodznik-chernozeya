import React, { Component, Fragment } from 'react';
import { Form, Row, Col } from 'react-bootstrap';


export class Steps extends Component {
  state={}
    handleChange = (question,answer) => {
        this.setState({
            [question]:answer
        })
    }
    render() {
        let steps = this.props.steps;
        let currentStep = this.props.current
        console.log(this.props)
        return (
            <div className=" pt-5">
<Row>
                {
                    steps[currentStep].map((step, index) => {
                        let type = currentStep === 0 ? 'text' : 'radio'
                        return (
                            step.supTitle ? <h2 key={index}>{step.supTitle}</h2> :
                                <Fragment key={index}>

                                        {type === 'text' ?
                                            <Fragment>
                                                <Col sm={12}>
                                                < h3 > {step.title}</h3></Col>
                                                {
                                                    step.versions.map((version, ind) => {

                                                        return (
                                                            <Col md={6} key={ind}>
                                                                <Form.Group className={type}>
                                                                    <Form.Label htmlFor={version.split(' ')[0]}>{version}</Form.Label>
                                                                    <Form.Control
                                                                    type={type}
                                                                    id={version.split(' ')[0]}
                                                                    name={`name${index}`}

                                                                    onChange={({target})=>this.handleChange(version,target.value)}/>
                                                                    <span className="checkmark"></span>
                                                                </Form.Group>
                                                            </Col>
                                                        )
                                                    })
                                                }</Fragment>
                                            :
                                            <Col md={6} >
                                                < h3 className="mt-3"> {step.title}</h3>
                                                {
                                                    step.versions.map((version, ind) => {
                                                        let id = Math.floor(Math.random()*50)
                                                        return (
                                                            <Form.Group className={type} key={ind}>
                                                                <Form.Label htmlFor={version.split(' ')[0]+id}>{version}</Form.Label>
                                                                <Form.Control
                                                                type={type}
                                                                id={version.split(' ')[0]+id}
                                                                name={`name${index}`}
                                                                defaultValue={version}
                                                                  onChange={({target})=>this.handleChange(step.title,target.value)}/>
                                                                <span className="checkmark"></span>
                                                            </Form.Group>

                                                        )
                                                    })
                                                }
                                            </Col>
                                        }
                                </Fragment>

                        )
                    })

                }
</Row>
            </div >
        );
    }
}

export default Steps;
