import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState, useRef } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const SendUsAMessagePage = () => {
  const navigate = useNavigate();
  const [showA, setShowA] = useState(false);
  const formRef = useRef(null)
  const toggleShowA = () => setShowA(!showA);
  const submit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (formRef.current) {
      const formIsValid = formRef.current.checkValidity()
      if (formIsValid) {
        toggleShowA()
      } else {
        console.log('表单验证失败')
        formRef.current.classList.add('was-validated')
      }
    }
  }
  return (
    <div className="container text-left px-2">
      <div className="row mx-1">
        <div className="bg-light rounded-3 pb-5 pt-5 px-4">
          <div className="mx-0">
            <div className="d-flex flex-column justify-content-center pb-5">
              <h5 className="text-center">BanffNB666 since 1675. Welcome to BanffNB666, your serene <br/>escape nestled in the heart of Banff National Park.</h5>
              <h5 className="text-center pt-3 text-nowrap">Any doubts? Don't worry send us a message, we will reply to you soon.</h5>
            </div>
            <form ref={formRef} className="d-flex justify-content-center" noValidate>
              <div className="mx-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Leave us a message here
                </label>
                <textarea
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Text"
                  rows="10"
                  required
                />
                <div className="invalid-feedback">
                  Please enter
                </div>
              </div>
              <div className="mx-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Please enter your email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Please enter your phone number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter
                  </div>
                </div>
                <div className="pt-2">
                  <div>
                    <button type="submit" className="btn btn-outline-primary btn-lg" onClick={(event)=>{submit(event)}}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer 
        aria-live="polite"
        aria-atomic="true"
        position="top-end"
        className="bg-light p-3">
        <Toast show={showA} onClose={toggleShowA} delay={3000} autohide={true}>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Message has been sent</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default withLayout(SendUsAMessagePage);
