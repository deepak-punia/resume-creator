import { Form} from "react-bootstrap";

const StepThree = ({skills,handleSkills}) => {
  return (
    <>
    
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="skills1"
          placeholder="Skills 1"
          value={skills.skills1}
          onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
       
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="skills2"
          placeholder="Skills 2"
          value={skills.skills2}
          onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="skills3"
          placeholder="Skills 3"
          value={skills.skills3}
          onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="skills4"
          placeholder="Skills 4"
          value={skills.skills4}
          onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
       
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					 type="text"
           name="skills5"
           placeholder="Skills 5"
           value={skills.skills5}
           onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="skills6"
          placeholder="Skills 6"
          value={skills.skills6}
          onChange={handleSkills}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

        
    </>
  )
}

export default StepThree