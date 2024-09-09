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
    color: ${({ theme }) => theme.colors.BW1};
    padding: 0.5em;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 99999;
    width: calc(100% - 0.5em * 2);
  }

  .link-wrapper {
    padding: 1em;
    color: ${({ theme }) => theme.colors.BW0};
    background-color: ${({ theme }) => theme.colors.BW1};
    border-radius: 20px;
  }

  .login-wrapper {
    padding: 1em;
    color: ${({ theme }) => theme.colors.BW0};
    background-color: ${({ theme }) => theme.colors.BW1};
    border-radius: 20px;
  }

  .a-login-wrapper {
    margin-left: auto;
  }

  .login-wrapper:hover,
  .link-wrapper:hover {
    background-color: ${({ theme }) => theme.colors.secondary1};
    color: ${({ theme }) => theme.colors.BW1};
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
      to: "/Planes",
      text: "Planes",
    },
    {
      to: "/Productos",
      text: "Productos",
    },
    {
      to: "/Contactanos",
      text: "Contactanos",
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
