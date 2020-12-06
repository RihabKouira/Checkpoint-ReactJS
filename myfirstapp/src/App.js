import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, Form, Container, Row, Col, Image } from 'react-bootstrap';


function App() {
  return (
    <div className="App">

 <Navbar collapseOnSelect expand="lg"  >
    <Container>
      <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Products</Nav.Link> 
        </Nav>
        <Nav>
          <Nav.Link href="#">Sign Up</Nav.Link>
          <Nav.Link  href="#">Sign IN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

   <Container>
      <Row>
        <Col>
        <br/>
        <div className="form-wrapper">

          <Form  className="Landing" >
          <h2>Sign Up</h2><br/>
            <Form.Group >
              <Form.Label>FirstName</Form.Label>
              <Form.Control type="text" placeholder="Enter your FirstName" />
            </Form.Group>
            <Form.Group >
              <Form.Label>LastName</Form.Label>
              <Form.Control type="text" placeholder="Enter your LastName" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Email</Form.Label>
              <Form.Control type="Emil" placeholder="Enter your Email" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your Password" />
            </Form.Group>
               <Button type="submit" size="lg" block>Submit</Button>
            </Form>
            </div>
        </Col>

        <Col>
        <br/> 
        <div>
          <Image src="./img/shopping.PNG" className="img"/> 
        </div>
        </Col>

      </Row>
    </Container>
    </div>
  );
}

export default App;
