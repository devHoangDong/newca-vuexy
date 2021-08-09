// ** Icons Import
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <>
      <hr />
      <p className="clearfix mb-0">
        <span className="float-md-left d-block d-md-inline-block mt-25 font-weight-bolder text-uppercase">
          Công ty cổ phần chữ ký số NewCA
        </span>
        <span className="float-md-right d-none d-md-block">
          Copyright © NewCA. All rights reserved.
        </span>
      </p>
      <div>
        Địa chỉ: Tầng 4B, Tòa nhà T6-08, đường Tôn Quang Phiệt, Q.Bắc Từ Liêm,
        Hà Nội{" "}
      </div>
      <div>Tổng đài hỗ trợ: 1900.2066 </div>
      <div>Hotline: 0936.208.068 </div>
    </>
  );
};

export default Footer;
// COPYRIGHT © {new Date().getFullYear()}{' '}
