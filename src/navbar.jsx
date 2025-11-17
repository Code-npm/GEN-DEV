import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX - offsetX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    let newX = e.clientX - startX;

    // Optional: prevent dragging out of the screen
    if (newX < 0) newX = 0;

    navRef.current.style.left = newX + "px";
    setOffsetX(newX);
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <nav
      ref={navRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="flex gap-6 items-center bg-gray-200 p-4 rounded-lg cursor-grab"
      style={{
        position: "absolute",
        top: "35rem",
        left: "50px",       // starting X position
        width: "400px",     // ⭐ FIXED WIDTH
        userSelect: "none",
      }}
    >
      {/* ⭐ your navbar content — unchanged */}

      <button className="btnnav">
        <Link to="/roadmap" className="l">
         
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path
    d="M15,7V3H9V7Zm6,14V17H17v4ZM3,21H7V17H3Zm9-4.17L14.83,14,12,11.17,9.17,14Z"
    fill="#2ca9bc"
  />

  <polyline points="15 14 19 14 19 17" />
  <polyline points="5 17 5 14 9 14" />

  <path d="M12,7v4M9,7V3h6V7Zm8,14V17h4v4ZM3,17H7v4H3Zm6.17-3L12,11.17,14.83,14,12,16.83Z" />
</svg>
        </Link>
      </button>

      <button className="btnnav">
        <Link to="/home" className="l">
         <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  stroke="currentColor"
  fill="none"
  strokeWidth="1.5"
  className="cursor-pointer"
>
  <circle cx="12" cy="8" r="4" />
  <path d="M4 20c2-4 6-6 8-6s6 2 8 6" />
</svg>
         

        </Link>
      </button>

      <button className="btnnav">
        <Link to="/chatbot" className="l">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width="30"
  height="30"
  aria-hidden="true"
>
  <rect
    x="10"
    y="10"
    width="44"
    height="44"
    rx="6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  />

  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="18" x2="10" y2="18" />
    <line x1="6" y1="30" x2="10" y2="30" />
    <line x1="6" y1="42" x2="10" y2="42" />
    <line x1="54" y1="18" x2="58" y2="18" />
    <line x1="54" y1="30" x2="58" y2="30" />
    <line x1="54" y1="42" x2="58" y2="42" />
    <line x1="18" y1="6" x2="18" y2="10" />
    <line x1="30" y1="6" x2="30" y2="10" />
    <line x1="42" y1="6" x2="42" y2="10" />
    <line x1="18" y1="54" x2="18" y2="58" />
    <line x1="30" y1="54" x2="30" y2="58" />
    <line x1="42" y1="54" x2="42" y2="58" />
  </g>

  <text
    x="32"
    y="36"
    fontSize="14"
    fontFamily="Arial, Helvetica, sans-serif"
    textAnchor="middle"
    fill="currentColor"
    fontWeight="700"
  >
    AI
  </text>
</svg>

    </Link>
      </button>

    </nav>
  );
};

export default Navbar;
