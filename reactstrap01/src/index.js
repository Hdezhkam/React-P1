import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Alert,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

const rootNode = document.getElementById('root');

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(`The name is : ${this.state.value}`);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    render() {
        return (
            <Container>
                <Row style={{ padding: 20 }}>
                    <Col>
                        <Alert color="success" style={{ height: 50 }}>
                            {this.state.value}
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="txtName">Name:</Label>
                                <Input id="txtName" type="text" onChange={this.handleChange} />
                            </FormGroup>
                            <Button color="info">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

render(
    <NameForm />,
    rootNode
);