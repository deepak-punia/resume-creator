import { Form} from "react-bootstrap";

const StepOne = ({formData, handleChange}) => {   
  return (
    <>
			<h2>Download Resume PDF </h2>
			<h3>Fill detaile below to download resume. </h3>
      <hr />
      <Form.Group className="mb-3" >
				<Form.Label>First Last Name</Form.Label>
				<Form.Control
					type="text"
          name="name"
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
      <Form.Group className="mb-3" >
				<Form.Label>Address</Form.Label>
				<Form.Control
					type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        
        <Form.Group className="mb-3" >
				<Form.Label>Objective</Form.Label>
				<Form.Control
					as="textarea"
          name="objective"
          placeholder="objective"
          value={formData.objective}
          onChange={handleChange}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Email</Form.Label>
				<Form.Control
				type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
        <Form.Group className="mb-3" >
				<Form.Label>Phone</Form.Label>
				<Form.Control
					type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
				/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
        
      </>
  )
}
export default StepOne;