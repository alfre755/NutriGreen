import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NavBarStyle = styled.section`
  .nav {
    position: sticky;
    top: 0;
    display: flex;
    gap: 1em;
    align-items: center;
    padding: 0.5em;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    background-color: ${({ theme }) => theme.colors.BW1};
    z-index: 99999;
    width: calc(100% - 0.5em * 2);
  }

  .link-wrapper {
    padding: 1em;
    color: black;
    background-color: white;
    border-radius: 10px;
  }

  .login-wrapper {
    padding: 1em;
    color: black;
    background-color: white;
    border-radius: 10px;
  }

  .a-login-wrapper {
    margin-left: auto;
  }

  .login-wrapper:hover,
  .link-wrapper:hover {
    background-color: var(--color-bg-contraste-2);
  }
`;

function NavBar() {
  const objLink = [
    {
      to: "/",
      text: "MenuInvitado",
    },
    {
      to: "/Administracion",
      text: "Administracion",
    },
    {
      to: "/MenuCliente",
      text: "MenuCliente",
    },
    {
      to: "/Login",
      text: "Login",
    },
  ];
  return (
    <NavBarStyle>
      <nav className="nav">
        {objLink.map(({ to, text }) => {
          return (
            <Link
              key={to}
              to={to}
              className={to === "/Login" ? "a-login-wrapper" : "a-link-wrapper"}
            >
              <div
                className={to === "/Login" ? "login-wrapper" : "link-wrapper"}
              >
                <h1>{text}</h1>
              </div>
            </Link>
          );
        })}
      </nav>
    </NavBarStyle>
  );
}

NavBar.propTypes = {};

export default NavBar;
