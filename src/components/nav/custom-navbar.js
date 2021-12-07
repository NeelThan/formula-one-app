import { Navbar, Container } from "react-bootstrap";

const CustomNavbar = () => {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Champion Results</Navbar.Brand>
                    <Navbar.Brand href="#">Season Results</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Developed by: Neeleshan Thanthony
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default CustomNavbar 