import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
        <div className="footer text-center">
          <img src="Images/creemees 5.png" width="283px" alt="cremees" />
          <div >
            <ul className="footer-ul d-flex justify-content-center pt-3" type="none">
              <li className="pe-3">©2021 Creemees, LLC</li>
              <li className="pe-3">|</li>
              <li className="pe-3"><Link to="/terms">Terms</Link></li>
              <li className="pe-3">|</li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
    </>
  );
}

export default Footer;
