import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // 导入i18n配置
// 公用头部组件
const HeaderComponent = () => {
  const location = useLocation();
  const [lang, setLang] = useState({
    lang: 'en',
    label: 'English'
  });
  const [langList] = useState([
    {
      lang: 'zh',
      label: '中文'
    },
    {
      lang: 'en',
      label: 'English'
    }
  ])
  const toggleLang = (lang) => {
    setLang(lang)
    i18n.changeLanguage(lang.lang)
  }
  const { t } = useTranslation();
  // debugger
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-0">
          <a className="navbar-brand" href=" ">BanffNB666</a >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/#">{t('首页')}</a >
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/roomsFeatures" ? "nav-link active" : "nav-link"} href="/#roomsFeatures">{t('房间特征')}</a >
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/bookNow" ? "nav-link active" : "nav-link"} href="/#bookNow">Book Now</a >
              </li>
              <li className="nav-item">
                <a className={location.pathname === "/sendUsAMessage" ? "nav-link active" : "nav-link"} href="/#sendUsAMessage">Send us a message</a >
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  { lang.label }
                </a > */}
                <ul className="dropdown-menu">
                  {
                    langList.map((item, index) => {
                      return <li key={index} onClick={ ()=>{toggleLang(item)} }><a className="dropdown-item" >{item.label}</a ></li>
                    })
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

// 公用尾部组件
const FooterComponent = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h5 className="mb-4">FrontDesk Open hours</h5>
            <p className="mb-0">Monday - Thursday 10am-6:30pm</p>
            <p className="mb-0">Friday - 10am-5:30pm</p>
            <p className="mb-0">Monday - 10am-3pm (alternating)</p>
            <p className="mb-0">Sunday - ClOSED</p>
          </div>
          <div className="col-md-5 text-end">
            {/* <img src="map.png" style={{width:'300px', height: '200px', background: '#f5f5f5'}} className="rounded float-end img-fluid" alt="..."></img> */}
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094763!2d144.9537363153166!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774bcd91fd8d0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1593077428424!5m2!1sen!2sau"
              allowfullscreen=""
              loading="lazy"
              aria-hidden="false"
              tabindex="0">
            </iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 高阶组件
const withLayout = (Component) => {
  return () => 
    <div>
      <HeaderComponent />
      <Component />
      <FooterComponent />
    </div>
}

export default withLayout;
