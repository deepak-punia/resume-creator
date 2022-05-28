import {Container, Row, Col} from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setAlert} from './actions/alert';
import Alerts from './components/Alerts';
import Register from './components/Register';
import Login from './components/Login';
import { loadUser } from './actions/auth';
import Final from './components/resumeForm/Final';



const App=()=> {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadUser());
  },[]);

  return (
    <>
    <Container fluid className='bg-primary p-5'>
     
     
  <Row>
    <Col className='text-center'><Alerts /></Col>
  </Row>
  <Row>
    <Col className='text-center'><Register /></Col>
    <Col className='text-center'><Login /></Col>
  </Row>
  <Row>
    <Col className='text-center'><Final /></Col>
  </Row>
  
</Container>
</>
  );
}

export default App;
