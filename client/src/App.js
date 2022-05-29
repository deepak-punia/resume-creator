import {Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setAlert} from './actions/alert';
import Alerts from './components/Alerts';
import Register from './components/Register';
import Login from './components/Login';
import { loadUser } from './actions/auth';
import Final from './components/resumeForm/Final';
import { useNavigate } from "react-router-dom";





const App=()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth);
  const [visitor, setvisitor] = useState(true);

  useEffect(()=>{
    dispatch(loadUser());
    if(user.isAuthenticated){
			navigate("/dashboard");
		}
  },[]);

  if(user.isAuthenticated){
    navigate("/dashboard");
  }
  return (
    <>
    <Container fluid className='bg-primary p-5'>
     
     
  <Row>
    <Col className='text-center'><Alerts componentName={"app"}/></Col>
  </Row>
  <Row>
  {visitor ? (
									<Col>
                  <Container fluid className="my-4 p-5 bg-light">
						<Row>
							<Col className='text-center'>
              <h2>Create account or Login to create PDF resume without watermark</h2>
							</Col>
              <Col className='text-center'>
                    <Button size="lg" onClick={(e)=>setvisitor(!visitor)}><h2>Create Resume </h2></Button>
                    
                    </Col>
						</Row>
					</Container>
                  
                  
                    </Col>
								) : (
									<Col className='text-center'><Final /></Col>
								)}
    
  </Row>
  <Row>
    <Col className='text-center'><Register /></Col>
    <Col className='text-center'><Login /></Col>
  </Row>
  
  
</Container>
</>
  );
}

export default App;
