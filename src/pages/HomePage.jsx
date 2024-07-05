import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Onrientation Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video controls style={{width:'100%',aspectRatio: 16/9}} className="d-block">
          <source src="/vite1/banff.mp4" type="video/mp4"/>
          The video is not supported on the browser
        </video>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>关闭</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="container text-left px-2">
        <div>
          <a href="">343-xxx-xxx</a>
          <p>First road 1<br/>Banff, KK oP7<br/>Canada</p>
        </div>
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4" style={{ background: "url(/vite1/bg3.jpg) no-repeat", backgroundSize: 'cover' }}>
            <h5 className="pt-5 pb-5" style={{lineHeight: 1.6, color: 'white', fontWeight: 'bold' }}>
              BanffNB666 since 1675. Welcome to BanffNB666, your serene escape nestled in the heart of Banff
              NationaPark. Enjoy modern amenities, breathtaking mountain views, and exceptional service. Our luxurious
              roomsgourmet dining, and rejuvenating spa ensure a memorable stay. Perfect for adventurers and
              relaxationseekers alike. Experience Banff's natural beauty with us. description here.
            </h5>
            <div className="text-center pt-5">
              <button  className="btn btn-outline-primary btn-lg my-2" style={{background: 'white'}} onClick={() => setModalShow(true)}>
                Click to see a video orientation
              </button>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default withLayout(HomePage);
