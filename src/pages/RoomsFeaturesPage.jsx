import { useNavigate } from "react-router-dom";
import withLayout from "../components/DefaultLayout";
import { useState } from 'react';
import {Button, Modal, Image, Carousel} from 'react-bootstrap';

const RoomsFeaturesPage = () => {
  const navigate = useNavigate();
  const [currImgs, setCurrImgs] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = (imgs) => {
    setCurrImgs(imgs)
    setShow(true)
  };

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [peopleNumber, setPeopleNumber] = useState('')
  const minPriceOnChange = (event) => {
    setMinPrice(event.target.value)
  }
  const maxPriceOnChange = (event) => {
    setMaxPrice(event.target.value)
  }
  const peopleNumberOnChange = (event) => {
    setPeopleNumber(event.target.value)
  }
  const [count, setCount] = useState(3)
  const search = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let count = 0
    setRoomList(roomList.map(item => {
      if (peopleNumber && minPrice && maxPrice) {
        // 输入三个
        if ( item.people >= peopleNumber && minPrice <= item.price && maxPrice >= item.price  ) {
          item.isShow = true
        } else {
          item.isShow = false
        }
      } else if (!peopleNumber && !minPrice && !maxPrice) {
        // 输入零个
        item.isShow = true
      } else if (peopleNumber && !minPrice && !maxPrice) {
        // 输入一个
        if ( item.people >= peopleNumber) {
          item.isShow = true
        } else {
          item.isShow = false
        }
      } else if (!peopleNumber && minPrice && !maxPrice) {
        // 输入一个
        if ( minPrice <= item.price ) {
          item.isShow = true
        } else {
          item.isShow = false
        }
        
      } else if (!peopleNumber && !minPrice && maxPrice) {
        // 输入一个
        if ( maxPrice >= item.price ) {
          item.isShow = true
        } else {
          item.isShow = false
        }
      } else if (peopleNumber && minPrice && !maxPrice) {
        // 输入两个
        if ( item.people >= peopleNumber && minPrice <= item.price ) {
          item.isShow = true
        } else {
          item.isShow = false
        }

      } else if (peopleNumber && !minPrice && maxPrice) {
        // 输入两个
        if ( item.people >= peopleNumber && maxPrice >= item.price  ) {
          item.isShow = true
        } else {
          item.isShow = false
        }

      } else if (!peopleNumber && minPrice && maxPrice) {
        // 输入两个
        if ( minPrice <= item.price && maxPrice >= item.price  ) {
          item.isShow = true
        } else {
          item.isShow = false
        }

      }
      if (item.isShow) {
        count++
      }
      return item
    }))
    setCount(count)
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
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    For how many people
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={peopleNumber}
                    onChange={peopleNumberOnChange}
                    placeholder="Number"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Min price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={minPrice}
                    onChange={minPriceOnChange}
                    placeholder="Number"
                  />
                </div>
                <div className="mx-1">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Max price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={maxPrice}
                    onChange={maxPriceOnChange}
                    placeholder="Number"
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
                  <div key={index} className={item.isShow?'d-flex justify-content-center mt-5':'d-none d-flex justify-content-center mt-5'}>
                    <div
                      className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
                      style={{ width: "760px" }}
                    >
                      <div className="col d-flex flex-column justify-content-center position-static">
                        <div className="p-4">
                          <h3 className="mb-0">{ item.name }</h3>
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
                        onClick={()=>handleShow(item.imgs)}
                      >
                        <img src={item.imgs.length>0?item.imgs[0]:''} style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                      </div>
                    </div>
                  </div>
                ))
              }
              {
                count <= 0 ?
                  <p className="text-center py-5 mt-5">No room available</p>: null
              }
            </div>
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>预览</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {
              currImgs.map((item, index)=>{
                return <Carousel.Item key={index}>
                  {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=f5f5f5"
                    alt="First slide"
                  /> */}
                  <Image src={item} className="d-block w-100" rounded style={{width:'100%'}}/>
                </Carousel.Item>
              })
            }
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" onClick={handleClose}>
            关闭
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default withLayout(RoomsFeaturesPage);
