import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Form.css";
function FormFloatingLayoutExample() {
  return (
    <div className="container w-50 p-3 border border-graw rounded-4">
      <Row className="g-2">
        <div className="col-md-6 rounded">
          <p>
            <input placeholder=" " />
            <label>First Name</label>
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <input placeholder=" " />
            <label>Lastname</label>
          </p>
        </div>
        <div className="col-md-6 rounded">
          <p>
            <input placeholder=" " />
            <label>First Name</label>
          </p>
        </div>
        <div className="col-md-6">
          <p>
            <input placeholder=" " />
            <label>Lastname</label>
          </p>
        </div>
        <div className="col-md-6 rounded">
          <p>
            <input placeholder=" " />
            <label>First Name</label>
          </p>
        </div>
        <div>
        <input type='radio' name='gender' value='male'/>Male</div>
<div><input type='radio' name='gender' value='female'/>Female</div>
        <div className="col-md-6">
          <p>
            <input placeholder=" " />
            <label>Lastname</label>
          </p>
        </div>
      </Row>
    </div>
  );
}

export default FormFloatingLayoutExample;
