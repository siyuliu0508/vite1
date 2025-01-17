import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState, useRef } from 'react';
import { Toast, ToastContainer, Form } from 'react-bootstrap';

const StepFirst = ({ step, toggleStep, getFormData }) => {
  const formRef = useRef(null);
  const [checkIndate, setCheckIndate] = useState('');
  const [checkOutdate, setCheckOutdate] = useState('');
  const [name, setName] = useState('');
  const [stayPeople, setStayPeople] = useState(1);
  const [roomType, setRoomType] = useState(1);

  const next = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (formRef.current) {
      const formIsValid = formRef.current.checkValidity();
      if (formIsValid) {
        getFormData({
          roomType,
          stayPeople,
          name,
          checkIndate,
          checkOutdate
        });
        toggleStep(2);
      } else {
        formRef.current.classList.add('was-validated');
      }
    }
  };

  const checkOutdateOnChange = (event) => {
    setCheckOutdate(event.target.value);
  };
  const checkIndateOnChange = (event) => {
    setCheckIndate(event.target.value);
  };
  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const stayPeopleOnChange = (event) => {
    setStayPeople(event.target.value);
  };
  const roomTypeOnChange = (event) => {
    setRoomType(event.target.value);
  };

  return step === 1 ? (
    <div className="container text-left px-2">
      <div className="row mx-1">
        <div className="bg-light rounded-3 pb-5 pt-5 px-4">
          <div className="mx-0">
            <div className="d-flex flex-column justify-content-center pb-5">
              <h4 className="text-center">Book your room</h4>
              <h5 className="text-center pt-3 text-nowrap">Step 1</h5>
            </div>
            <form ref={formRef} className="d-flex justify-content-center" noValidate>
              <div className="mx-3">
                <div className="mb-3">
                  <label htmlFor="roomType" className="form-label">Choose room type</label>
                  <select id="roomType" className="form-select" value={roomType} onChange={roomTypeOnChange} required>
                    <option value="1">Room type 1</option>
                    <option value="2">Room type 2</option>
                    <option value="3">Room type 3</option>
                  </select>
                  <div className="invalid-feedback">Please select</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="stayPeople" className="form-label">How many people to stay</label>
                  <select id="stayPeople" className="form-select" value={stayPeople} onChange={stayPeopleOnChange} required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div className="invalid-feedback">Please select</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Please enter your name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={nameOnChange}
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Please enter your phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Please enter your email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="checkIndate" className="form-label">Check in date</label>
                  <input
                    type="date"
                    id="checkIndate"
                    value={checkIndate}
                    onChange={checkIndateOnChange}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Please select</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="checkOutdate" className="form-label">Check out date</label>
                  <input
                    type="date"
                    id="checkOutdate"
                    value={checkOutdate}
                    onChange={checkOutdateOnChange}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Please select</div>
                </div>
                <div className="pt-2">
                  <div className="text-center">
                    <button type="submit" className="w-100 btn btn-outline-primary btn-lg" onClick={next}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const StepSecond = ({ step, toggleStep }) => {
  const formRef = useRef(null);
  const book = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (formRef.current) {
      const formIsValid = formRef.current.checkValidity();
      if (formIsValid) {
        toggleStep(3);
      } else {
        formRef.current.classList.add('was-validated');
      }
    }
  };

  return step === 2 ? (
    <div className="container text-left px-2">
      <div className="row mx-1">
        <div className="bg-light rounded-3 pb-5 pt-5 px-4">
          <div className="mx-0">
            <div className="d-flex flex-column justify-content-center pb-5">
              <h4 className="text-center">Book your room</h4>
              <h5 className="text-center pt-3 text-nowrap">Step 2</h5>
            </div>
            <form ref={formRef} className="d-flex justify-content-center" noValidate>
              <div className="mx-3">
                <div className="mb-3">
                  <label htmlFor="creditCard" className="form-label">Enter your credit card number</label>
                  <input
                    type="text"
                    id="creditCard"
                    className="form-control"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="expiry" className="form-label">Day/year to expire</label>
                  <input
                    type="text"
                    id="expiry"
                    className="form-control"
                    placeholder="Number/Number"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="secureNumber" className="form-label">Please enter the card secure number</label>
                  <input
                    type="text"
                    id="secureNumber"
                    className="form-control"
                    placeholder="Number"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Please enter your address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Text"
                    required
                  />
                  <div className="invalid-feedback">Please enter</div>
                </div>
                <div className="pt-2">
                  <div className="text-center">
                    <button type="submit" className="w-100 btn btn-outline-primary btn-lg" onClick={book}>
                      Book the room
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const StepThree = ({ step, order }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/#');
  };

  return step === 3 ? (
    <div className="container text-left px-2">
      <div className="row mx-1">
        <div className="bg-light rounded-3 pb-5 pt-5 px-4">
          <div className="mx-0">
            <div className="py-5">
              <h5 className="text-center py-5">
                Great! You have successfully booked room type {order.roomType}.<br />
                Check in date: {order.checkIndate}<br />
                Check out date: {order.checkOutdate}<br />
                Name: {order.name}<br />
                Number of people staying: {order.stayPeople}<br />
                We are looking forward to seeing you.
              </h5>
            </div>
            <form className="d-flex justify-content-center" onSubmit={(e) => e.preventDefault()}>
              <div className="mx-3">
                <div className="pt-2 pb-4">
                  <div className="text-center">
                    <button type="button" className="w-100 btn btn-outline-primary btn-lg" onClick={goHome}>
                      Go back to home page
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const BookNowPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState({
    roomType: 1,
    stayPeople: 1,
    name: '',
    checkIndate: '',
    checkOutdate: ''
  });

  const toggleStep = (step) => {
    setStep(step);
  };

  const getFormData = (data) => {
    const { roomType, stayPeople, name, checkIndate, checkOutdate } = data;
    setOrder({
      roomType,
      stayPeople,
      name,
      checkIndate,
      checkOutdate
    });
  };

  return (
    <>
      <StepFirst step={step} toggleStep={toggleStep} getFormData={getFormData} />
      <StepSecond step={step} toggleStep={toggleStep} />
      <StepThree step={step} order={order} />
    </>
  );
};

export default withLayout(BookNowPage);
