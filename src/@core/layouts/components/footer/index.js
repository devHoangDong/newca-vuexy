// ** Icons Import
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <>
      <hr />
      <p className="clearfix mb-0">
        <span className="float-md-left d-block d-md-inline-block mt-25 font-weight-bolder text-uppercase">
          Công ty cổ phần CyberLotus
        </span>
        <span className="float-md-right d-none d-md-block">
          Copyright © CyberLotus., JSC. All rights reserved.
        </span>
      </p>
      <div>
        Địa chỉ: Tầng 4B, Tòa nhà T6-08, đường Tôn Quang Phiệt, Q.Bắc Từ Liêm,
        Hà Nội{" "}
      </div>
      <div>Tổng đài hỗ trợ: 024.32.0000.77 </div>
      <div>Hotline: 093.826.2038 </div>
    </>
  );
};

export default Footer;
// COPYRIGHT © {new Date().getFullYear()}{' '}
