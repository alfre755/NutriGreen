import React from "react";
import styled from "@emotion/styled";

// Estilo común para las flechas
const ArrowStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 20px;

  &.prevArrow {
    left: 10px;
  }

  &.nextArrow {
    right: 10px;
  }
`;

// Componente de flecha izquierda
export function PrevArrow({ className, onClick }) {
  return (
    <ArrowStyle className={`${className} prevArrow`} onClick={onClick}>
      &lt; {/* Código HTML para flecha izquierda */}
    </ArrowStyle>
  );
}

// Componente de flecha derecha
export function NextArrow({ className, onClick }) {
  return (
    <ArrowStyle className={`${className} nextArrow`} onClick={onClick}>
      &gt; {/* Código HTML para flecha derecha */}
    </ArrowStyle>
  );
}
