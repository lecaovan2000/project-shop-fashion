import React from "react";
import { Link } from "react-router-dom";
import Gird from "./Gird";
import logo from "../assets/images/Logo-2.png";
const footerAboutLinks = [
  { display: "Giới thiệu", path: "/about" },
  { display: "Liên hệ", path: "/about" },
  { display: "Tuyển dụng", path: "/about" },
  { display: "Tin tức", path: "/about" },
  { display: "Hệ thống nhà hàng", path: "/about" },
];
const footerCustomLink = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Gird col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ khách hàng <strong>0355364589</strong>
              </p>
              <p>
                Thắc mắc đơn hàng<strong>0355364589</strong>
              </p>
              <p>
                Góp ý khiếu nại <strong>0355364589</strong>
              </p>
            </div>
          </div>

          <div>
            <div className="footer__title">Về Yolo</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomLink.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div className="footer__about">
            <p>
              <Link to={"/"}>
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>luyện tập code front end</p>
          </div>
        </Gird>
      </div>
    </footer>
  );
};

export default Footer;
