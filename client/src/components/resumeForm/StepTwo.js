import { Form} from "react-bootstrap";

const StepTwo = ({formData, handleEducation1, handleEducation2}) => {
  return (
    <>
    
          
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="time"
          placeholder="Education 1 Time"
          value={formData.education1.time}
          onChange={handleEducation1}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="university"
          placeholder="Education 1 University"
          value={formData.education1.university}
          onChange={handleEducation1}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="course"
          placeholder="Education 1 Course"
          value={formData.education1.course}
          onChange={handleEducation1}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					 type="text"
           name="location"
           placeholder="Education 1 Location"
           value={formData.education1.location}
           onChange={handleEducation1}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="achievement"
          placeholder="Education 1 Achievement"
          value={formData.education1.achievement}
          onChange={handleEducation1}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="time"
          placeholder="Education 2 Time"
          value={formData.education2.time}
          onChange={handleEducation2}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					 type="text"
           name="university"
           placeholder="Education 2 University"
           value={formData.education2.university}
           onChange={handleEducation2}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="course"
          placeholder="Education 2 Course"
          value={formData.education2.course}
          onChange={handleEducation2}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="location"
          placeholder="Education 2 Location"
          value={formData.education2.location}
          onChange={handleEducation2}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
				type="text"
        name="achievement"
        placeholder="Education 2 Achievement"
        value={formData.education2.achievement}
        onChange={handleEducation2}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>

                </>
  )
}

export default StepTwo