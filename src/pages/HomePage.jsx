import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // 导入i18n配置

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
          Orientation Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video controls style={{width:'100%', aspectRatio: '16/9'}} className="d-block">
          <source src="/vite1/banff.mp4" type="video/mp4"/>
          The video is not supported on the browser
        </video>
      </Modal.Body>
    </Modal>
  );
}

const HomePage = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="container text-left px-2">
        <div>
          <a href="tel:343-xxx-xxx">343-xxx-xxx</a>
          <address>
            First road 1<br/>
            Banff, KK oP7<br/>
            Canada
          </address>
        </div>
        <div className="row mx-1">
          <div 
            className="bg-light rounded-3 pb-5 pt-5 px-4" 
            style={{ background: "url(/vite1/bg3.jpg) no-repeat", backgroundSize: 'cover' }}
          >
            <h5 
              className="pt-5 pb-5" 
              style={{ lineHeight: 1.6, color: 'white', fontWeight: 'bold' }}
            >
              {t("首页信息")}
            </h5>
            <div className="text-center pt-5">
              <button 
                className="btn btn-outline-primary btn-lg my-2" 
                style={{ background: 'white' }} 
                onClick={() => setModalShow(true)}
                aria-label="Click to see a video orientation"
              >
                {t("视频")}
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
