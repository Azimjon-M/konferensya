import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ data }) {
  const [open, setOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);
  const menuRef = useRef([]);
  const location = useLocation();

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    menuRef.current.forEach((menu, idx) => {
      if (menu) {
        if (openIndex === idx) {
          const height = menu.scrollHeight;
          menu.style.maxHeight = `${height}px`;
        } else {
          menu.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  useEffect(() => {
    if (!open) {
      setOpenIndex(null); // Sidebar kamaytirilganda barcha menyularni yopish
    }
  }, [open]);

  return (
    <div id="sidebar" className="bg-gray-800">
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2"
      >
        Toggle Sidebar
      </button>
      <ul>
        {data.map((item, index) => {
          const isActive =
            location.pathname === item.link ||
            (item.children &&
              item.children.some((child) => location.pathname === child.link));

          return (
            <li key={index}>
              {!item.drop ? (
                <Link
                  to={item.link}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2
                    ${location.pathname === item.link ? "bg-light-white" : ""}`}
                >
                  {item.img}
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {item.title}
                  </span>
                </Link>
              ) : (
                <div className="text-white">
                  <div
                    onClick={() => toggleMenu(index)}
                    className={`dropdown-button flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-2
                      ${isActive ? "bg-light-white" : ""}`}
                  >
                    {item.img}
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {item.title}
                    </span>
                  </div>
                  <div
                    ref={(el) => (menuRef.current[index] = el)}
                    className="dropdown-menu ms-4 overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openIndex === index ? "auto" : "0px" }}
                  >
                    {item.children.map((child) => (
                      <div key={child.id} className="ps-4">
                        <Link
                          to={child.link}
                          className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center
                            ${location.pathname === child.link ? "bg-light-white" : ""}`}
                        >
                          <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {child.name}
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
