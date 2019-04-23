import React, { Component } from 'react';
import {
    Button,
    Badge
} from 'reactstrap';

class Counter extends Component {
    render() { 
        return ( 
            <div>
                <Badge color="info" className="m-2">
                    Toplearn
                </Badge>
                <Button
                    color="danger"
                    className="btn-sm m-2"
                >
                    Cancel    
                </Button>
                <Button 
                    color="primary"
                    className="btn-sm"
                >
                    Increase
                </Button>
            </div>

         );
    }
}
 
export default Counter;