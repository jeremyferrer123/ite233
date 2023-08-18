import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Link to="https://github.com/jeremyferrer123" className="text-light">
        <FaGithub />
      </Link>
      <Link to="https://www.facebook.com/jeremy.ferrer.03" className="text-light">
        <FaFacebook />
      </Link>
      <Link to="https://www.instagram.com/emy_ferrers/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR0RnrDZlfNfNSRfb0pLeqJEKvEDV4K9zIGhKlkUXKX_WX_jXZ5KHqVE3aY" className="text-light">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;