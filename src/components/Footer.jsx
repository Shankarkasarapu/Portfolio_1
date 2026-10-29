import { profile } from "../data";

const Footer = () => (
  <footer className="footer">
    
    <p className="muted">
      {profile.location} · © {new Date().getFullYear()} Gowri Sankar. All rights reserved.
    </p>
  
  </footer>
);

export default Footer;
