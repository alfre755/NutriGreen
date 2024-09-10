import React, { useState } from "react";
import PT from "prop-types";
import styled from "@emotion/styled";
import SimpleLoading from "../SimpleLoading";
import Color from "color";

const ButtonStyle = styled.button`
  --size: ${(props) => props.theme.dimensions.fontSize4};
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

  &.onCooldown {
    > .loading {
      opacity: 1;
    }

    > .children {
      opacity: 0;
    }
  }

  > .loading {
    pointer-events: none;
    position: absolute;
    opacity: 0;
  }

  > .children {
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
  }

  &.type1 {
    --contentColor: ${(props) => props.theme.colors.BW0};
    border-radius: 20px;
    padding: ${(props) => props.theme.dimensions.buttonPadding};
    background-color: ${(props) => props.theme.colors.primary};

    &:not(:disabled):hover {
      box-shadow: ${(props) => props.theme.shadows.main},
        ${(props) => props.theme.shadows.inset};
    }
  }

  &.type2 {
    --contentColor: ${(props) => props.theme.colors.BW1};
    border-radius: 20px;
    padding: ${(props) => props.theme.dimensions.buttonPadding};
    background-color: ${(props) => props.theme.colors.BW0};
    border: 2px solid ${(props) => props.theme.colors.BW1};

    &:not(:disabled):hover {
      box-shadow: ${(props) => props.theme.shadows.main},
        ${(props) => props.theme.shadows.inset};
    }
  }

  &.type3 {
    --contentColor: ${(props) => props.theme.colors.BW1};
    padding: 0;

    &:disabled {
      background-color: transparent;
      box-shadow: none;
    }
  }

  &.type4 {
    --size: ${(props) => props.theme.dimensions.fontSize6};
    border-radius: ${({ theme }) => theme.dimensions.borderRadius};
    padding: 10px;

    &:not(:disabled):hover {
      --contentColor: ${({ theme }) => theme.colors.BW0};
      text-shadow: ${(props) => props.theme.textGlow};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &.type5 {
    --contentColor: ${(props) => props.theme.colors.BW0};
    border-radius: 20px;
    padding: ${(props) => props.theme.dimensions.buttonPadding};
    background-color: ${(props) => props.theme.colors.BW1};

    &:not(:disabled):hover {
      box-shadow: ${(props) => props.theme.shadows.main},
        ${(props) => props.theme.shadows.inset};
    }
  }

  &.type6 {
    --contentColor: ${(props) => props.theme.colors.BW1};
  }

  &.type7 {
    --contentColor: ${(props) => props.theme.colors.BW1};
    border-radius: 0px 20px 20px 0px;
    padding: ${(props) => props.theme.dimensions.buttonPadding};
    background-color: ${(props) =>
      Color(props.theme.colors.primary).alpha(0).toString()};

    &:not(:disabled):not(.active):hover {
      background-color: ${(props) =>
        Color(props.theme.colors.primary).alpha(0.15).toString()};
    }

    &.active {
      background-color: ${(props) =>
        Color(props.theme.colors.primary).alpha(0.3).toString()};
    }
  }

  &.type8 {
    --contentColor: ${(props) => props.theme.colors.BW0};
    border-radius: 20px;
    padding: ${(props) => props.theme.dimensions.buttonPadding};
    background-color: ${({ theme }) => theme.colors.error};

    &:not(:disabled):hover {
      box-shadow: ${(props) => props.theme.shadows.main},
        ${(props) => props.theme.shadows.inset};
    }
  }

  &:not(.type4):not(.type7):not(:disabled):hover {
    transform: scale(1.05);
    text-shadow: ${(props) => props.theme.textGlow};
  }

  &:disabled {
    filter: grayscale(100%);
    --contentColor: ${(props) => props.theme.colors.BW2};
    background-color: ${({ theme }) => theme.colors.BW4};
    box-shadow: ${(props) => props.theme.shadows.inset2};
  }

  & .simpleLoading > svg {
    width: var(--size);
    height: var(--size);
  }

  & svg {
    width: var(--size);

    > path {
      fill: var(--contentColor);
    }
  }
`;

/**
 * Componente que permite construir botones con estilo estandar del proyecto en cuestion.
 *
 * @component
 * @param {Object} props Propiedades del componente
 * @param {Number} props.type Número identificador del tipo de estética del botón
 * @param {Function} props.onClick Funcion callback que se ejecuta una vez se presiona el botón
 * @param {Array<Element>} props.children Array de Elementos de react que serán renderizados como hijos del componente
 * @param {String} props.className String que determina la clase html del botón
 * @example
 *
 * return <Button type={1} onClick={() => {}} className={"EnviarMail"} >Enviar Mail</Button>
 */
function Button({ onClick, children, type, className, input, disabled }) {
  const [onCoolDown, setOnCooldown] = useState(false);
  const _className = className ? ` ${className}` : "";

  return (
    <ButtonStyle
      type={input}
      className={`type${type}${_className}` + (onCoolDown ? " onCooldown" : "")}
      onClick={async (e) => {
        e.preventDefault();
        setOnCooldown(true);
        const response = await onClick();
        if (response) {
          setOnCooldown(false);
        }
      }}
      disabled={disabled || onCoolDown}
    >
      <div className="children">{children}</div>
      <div className="loading">{SimpleLoading()}</div>
    </ButtonStyle>
  );
}

Button.propTypes = {
  onClick: PT.func.isRequired,
  children: PT.oneOfType([PT.arrayOf(PT.node), PT.node]).isRequired,
  type: PT.number.isRequired,
  className: PT.string,
  input: PT.string,
  disabled: PT.bool,
};

export default Button;
