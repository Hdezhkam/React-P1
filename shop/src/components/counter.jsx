import React, { Component } from 'react';
import {
    Button,
    Badge
} from 'reactstrap';

class Counter extends Component {
    render() {
        const {
            counter,
            onDelete,
            onIncrement
        } = this.props;
        return (
            <div>
                <Badge color={this.getBadgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>
                <Button
                    color="danger"
                    className="btn-sm m-2"
                    onClick={() => onDelete(counter.id)}
                >
                    Delete
                </Button>
                <Button
                    color="primary"
                    className="btn-sm"
                    onClick={() => onIncrement(counter)}
                >
                    Increament
                </Button>
            </div>

        )
    }

    getBadgeColor() {
        return this.props.counter.value === 0 ? 'warning' : 'primary';
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? '0' : value;
    }
}

export default Counter;