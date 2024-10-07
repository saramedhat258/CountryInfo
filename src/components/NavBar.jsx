import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

function NavBar({settoggle,toggle}) {
    const tog=()=>{
        settoggle(!toggle)
    }
    return (
        <>
            <Navbar fixed='top' expand='lg' className='nav '>
                    <Container>
                        <Navbar.Brand href="#home" className='text-light'>Where in the world?</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#home" className='text-light' onClick={()=>tog()}>Dark mode</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBar