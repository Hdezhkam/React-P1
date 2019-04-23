import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Badge
} from 'reactstrap';    

const NavBar = ({totalCounters}) => {
    return ( 
        <div style={{direction: "rtl"}}>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Shop Basket</NavbarBrand>
                    <Badge color="info" pill className="m-2">
                        {totalCounters}
                    </Badge>
                </Navbar>
        </div>
     );
}

export default NavBar;