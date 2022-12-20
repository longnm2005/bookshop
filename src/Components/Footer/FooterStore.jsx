import React from "react";
import { MdPlace } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import "./style.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function FooterStore() {
  return (
    <div className="footerbook">
      <div className="left">
        <h4>EATKAKA</h4>
        <p>
          Tự hào là shop sách với lượng truy cập khủng , số lượng sách nhiều và
          nhiều thể loại Chúng tôi luôn muốn mang đến cho bạn trải nghiệm tốt
          nhất
        </p>
        <div>
          <FaFacebook style={{ width: "30px", height: "30px" }} />
          <FaInstagram
            style={{ width: "30px", height: "30px", margin: "0px 10px" }}
          />
          <FaTwitter style={{ width: "30px", height: "30px" }} />
        </div>
      </div>

      <div className="right">
        <h4>CONTACT</h4>
        <span>
          <MdPlace />
          458 Tôn Đức Thắng,Liên Chiểu,Đà Nẵng
        </span>
        <span className="spanfooter">
          <BiMobileVibration />
          0123456768
        </span>
        <span className="spanfooter">
          <FiMail />
          vannhiliem@gmail.com
        </span>
      </div>
    </div>
  );
}
