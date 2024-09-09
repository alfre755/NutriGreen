import React from "react";
import PT from "prop-types";
import styled from "@emotion/styled";

const ButtonStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  transition: all ease ${(props) => props.theme.transition[2]};
  align-self: center;
  font-size: var(--size);
  color: var(--contentColor);
  position: relative;
  font-family: ${(props) => props.theme.fonts.header};

  &.type1 {
    border-radius: 20px;
    padding: 0.5em;
    background-color: ${(props) => props.theme.colors.primary};

    & :hover {
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.16);
    }
  }
`;

function Button({ onClick, children, type, className }) {
  const _className = className ? ` ${className}` : "";
  return (
    <ButtonStyle className={`type${type}${_className}`} onClick={onClick}>
      <div className="children">{children}</div>
    </ButtonStyle>
  );
}

Button.propTypes = {
  onClick: PT.func.isRequired,
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired,
  type: PT.number.isRequired,
  className: PT.string,
};

export default Button;
