import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <div className="w-28">
        <img src="/img/Logo.svg" alt="Logo" />
      </div>
    </Link>
  );
};

export default Logo;
