import React from "react";
import {
  
  LinkedinShareButton,
  LinkedinIcon,
  LineShareButton
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Sydney, Aus</p>
            </div>
            <div className="d-flex">
              <a href="tel:99999999999">+6199999999</a>
            </div>
            <div className="d-flex">
              <p>nadjaantonjak123@live.com.au</p>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
          
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | Nadja Antonjak, All Rights Reserved
            </p>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
              <div className="d-flex justify-content-center">
                <LinkedinShareButton
                 url={"https://www.linkedin.com/in/nadja-antonjak/"}
                 >
                 <LinkedinIcon  className="mx-3" size={36} />
                 </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
