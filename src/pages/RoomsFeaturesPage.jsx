import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react';
import { Button, Modal, Image, Carousel } from 'react-bootstrap';

const RoomsFeaturesPage = () => {
  const navigate = useNavigate();
  const [currImgs, setCurrImgs] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (imgs) => {
    setCurrImgs(imgs);
    setShow(true);
  };

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [peopleNumber, setPeopleNumber] = useState('');
  const minPriceOnChange = (event) => {
    setMinPrice(event.target.value);
  }
  const maxPriceOnChange = (event) => {
    setMaxPrice(event.target.value);
  }
  const peopleNumberOnChange = (event) => {
    setPeopleNumber(event.target.value);
  }
  const [count, setCount] = useState(3);
  const search = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let count = 0;
    setRoomList(roomList.map(item => {
      if (peopleNumber && minPrice && maxPrice) {
        if (item.people >= peopleNumber && minPrice <= item.price && maxPrice >= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (!peopleNumber && !minPrice && !maxPrice) {
        item.isShow = true;
      } else if (peopleNumber && !minPrice && !maxPrice) {
        if (item.people >= peopleNumber) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (!peopleNumber && minPrice && !maxPrice) {
        if (minPrice <= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (!peopleNumber && !minPrice && maxPrice) {
        if (maxPrice >= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (peopleNumber && minPrice && !maxPrice) {
        if (item.people >= peopleNumber && minPrice <= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (peopleNumber && !minPrice && maxPrice) {
        if (item.people >= peopleNumber && maxPrice >= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      } else if (!peopleNumber && minPrice && maxPrice) {
        if (minPrice <= item.price && maxPrice >= item.price) {
          item.isShow = true;
        } else {
          item.isShow = false;
        }
      }
      if (item.isShow) {
        count++;
      }
      return item;
    }));
    setCount(count);
  }
  const [roomList, setRoomList] = useState([
    { name: 'Room type 1', people: 1, price: 200, desc: '2 queen beds, 1 sofa, 1 kitchen, 1 washroom', imgs: ['/vite1/room1.jpg', '/vite1/room2.jpg'], isShow: true },
    { name: 'Room type 2', people: 2, price: 300, desc: '2 queen beds, 1 sofa, 1 kitchen, 1 washroom', imgs: ['/vite1/room3.jpg', '/vite1/room4.jpg'], isShow: true },
    { name: 'Room type 3', people: 3, price: 500, desc: '2 queen beds, 1 sofa, 1 kitchen, 1 washroom', imgs: ['/vite1/room6.jpg', '/vite1/room5.jpg'], isShow: true },
  ])
  return (
    <>
      <div className="container text-left px-2">
        <div className="row mx-1">
          <div className="bg-light rounded-3 pb-5 pt-5 px-4">
            <div className="mx-5">
              <div className="d-flex justify-content-center pb-5">
                <ul>
                  <li><h5 className="my-0 py-1">Each cabin is equipped with TV, fridge, microwave, coffee and tea.</h5></li>
                  <li><h5 className="my-0 py-1">1 complimentary parking stall, near each cabin, for registered Guests.</h5></li>
                  <li><h5 className="my-0 py-1">Pet-free and smoke-free property, Cabins with evidence of pets or smoke of</h5></li>
                  <li><h5 className="my-0 py-1">any kind (tobacco, cannabis, vape products) will be subject to a penalty.</h5></li>
                  <li><h5 className="my-0 py-1">Complimentary Wi-Fi-Intermittent signal due to mountainous location.</h5></li>
                </ul>
              </div>
              <form className="d-flex justify-content-center">
                <div className="mx-1">
                  <label htmlFor="peopleNumber" className="form-label">
                    For how many people
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="peopleNumber"
                    value={peopleNumber}
                    onChange={peopleNumberOnChange}
                    placeholder="Number"
                    aria-label="Number of people"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="minPrice" className="form-label">
                    Min price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="minPrice"
                    value={minPrice}
                    onChange={minPriceOnChange}
                    placeholder="Number"
                    aria-label="Minimum price"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="maxPrice" className="form-label">
                    Max price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="maxPrice"
                    value={maxPrice}
                    onChange={maxPriceOnChange}
                    placeholder="Number"
                    aria-label="Maximum price"
                  />
                </div>
                <div className="mx-1">
                  <label className="form-label">&nbsp;</label>
                  <div>
                    <button type="submit" className="btn btn-outline-primary" onClick={search}>
                      Search
                    </button>
                  </div>
                </div>
              </form>
              { 
                roomList.map((item, index) => (
                  <div key={index} className={item.isShow ? 'd-flex justify-content-center mt-5' : 'd-none d-flex justify-content-center mt-5'}>
                    <div
                      className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
                      style={{ width: "760px" }}
                      role="region"
                      aria-labelledby={`room-${index}`}
                    >
                      <div className="col d-flex flex-column justify-content-center position-static">
                        <div className="p-4">
                          <h3 className="mb-0" id={`room-${index}`}>{ item.name }</h3>
                          <p className="card-text mb-auto">
                            { item.desc }
                            <br />
                            For { item.people } people maximum
                            <br />
                            { item.price }/night
                          </p>
                        </div>
                      </div>
                      <div
                        className="col d-none d-lg-block"
                        onClick={() => handleShow(item.imgs)}
                        role="button"
                        tabIndex="0"
                        aria-label={`View images of ${item.name}`}
                      >
                        <img src={item.imgs.length > 0 ? item.imgs[0] : ''} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={`Image of ${item.name}`} />
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                count <= 0 ?
                  <p className="text-center py-5 mt-5">No room available</p> : null
              }
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {
              currImgs.map((item, index) => (
                <Carousel.Item key={index}>
                  <Image src={item} className="d-block w-100" rounded style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
                </Carousel.Item>
              ))
            }
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withLayout(RoomsFeaturesPage);
