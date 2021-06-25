import React from 'react';
import { Home } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { ButtonGroup , Button} from '@material-ui/core';
import {Link} from 'react-router-dom'
//Home
//About
//Resume

const NavBar = () => {
    return(
        <div id="navigator">
            <Link to="/">
                <IconButton>
                    <Home/>
                </IconButton>
            </Link>
            <ButtonGroup id="buttonGroup" variant="text" border={0} style={{
            marginLeft : "auto",
            }}>
                <Link to="/resume"><Button variant="text" border={0}>Resume</Button></Link>
                <Link to="/projects"><Button variant="text" border={0}>Projects</Button></Link>
                <Link to="/contact"><Button variant="text" border={0}>Contact</Button></Link>
            </ButtonGroup>
        </div>
        
    );
}


export default NavBar;