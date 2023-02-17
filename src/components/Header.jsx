import React from "react";
import headerImage from "../image/headerImage.png";
import { useState } from "react";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#c1ffff",
  height: "60px",
  padding: "8px 16px",
  margin: "0px 8px",
  borderRadius: "8px"
};

const divStyle = {
  display: "flex"
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header style={headerStyle}>
      <img src={headerImage} alt="画像の説明" height="100%" />
      <div className="menu-button" onClick={toggleMenu} style={divStyle}>
        <p id="headerItem">ホーム</p>
        <p id="headerItem">ユーザー</p>
        <p id="headerItem">ログアウト</p>
      </div>

      {showMenu && (
        <ul className="hamburger-menu">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      )}
    </header>
  );
};
