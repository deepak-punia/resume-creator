import Final from "./resumeForm/Final";
import { dwnldResumeUser, loadResumeData } from "../actions/resume";
import { loadUser } from "../actions/auth";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {setAlert} from '../actions/alert';
import Alerts from "./Alerts";

const Dashboard = () => {
	const resumeData = useSelector((state) => state.resume);
  const user = useSelector(state=>state.auth);
	const dispatch = useDispatch();
  const navigate = useNavigate();

  const [refreshing, setrefreshing]= useState(true);

  //varify user
  useEffect(()=>{
    
    if(!user.isAuthenticated){
			navigate("/");
		}
    dispatch(loadUser());
    dispatch(loadResumeData());
  },[]);
  if(!user.isAuthenticated){
    navigate("/");
  }
	//handle update button
	const handleSaveClick1 = (e) => {
		e.preventDefault();
    dispatch(setAlert("Downloading PDF file...", "info","dashboard"));
		dispatch(dwnldResumeUser(resumeData.data));
	};
  //handle update button
	const handleEditClick1 = (e) => {
		e.preventDefault();
    dispatch(setAlert("Data loaded! Please edit below.", "success","dashboard"));
		setrefreshing(!refreshing);
	};

	return (
		<>
			<Container fluid className="bg-primary p-5">
				<Row>
					<Container fluid className="my-4 p-5 bg-light">
            
						<Row>
							<Col className="text-center">
								{resumeData.saved ? (
									<Row><Col className="text-center">
                    <Button onClick={handleSaveClick1}>Download PDF</Button>
                    
                    </Col>
                    <Col className="text-center">
                    <Button onClick={handleEditClick1}>EDIT Resume</Button>
                    
                    </Col>
                    </Row>
								) : (
									<h2>You don't have saved resume. Please create below.</h2>
								)}
							</Col>
						</Row>
            <Row>
              <Col className="text-center">
              <Alerts componentName={"dashboard"}/>
              </Col>
            </Row>
					</Container>
				</Row>
				<Row>
					<Final refresh={refreshing}/>
				</Row>
			</Container>
		</>
	);
};

export default Dashboard;
