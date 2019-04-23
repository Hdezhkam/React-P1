import React, { Component } from 'react';
import Counter from './counter';
import {
    Button,
    Container
} from 'reactstrap';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter }
    }
    render() {
        return (
            <Container>
                <div style={{ float: "left" }}>
                    {this.state.counters.map(counter =>
                        <counter />
                    )}
                </div>
            </Container>
        );
    }
}

export default Counters;