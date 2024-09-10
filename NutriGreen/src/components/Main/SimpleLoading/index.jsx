import React from "react";
import styled from "@emotion/styled";

const SimpleLoadingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & circle {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * Componente que renderiza una animación que retroalimenta al usuario que algun componente está siendo cargado
 * @component
 * @example
 * return <SimpleLoading />
 */
function SimpleLoading() {
  return (
    <SimpleLoadingStyle className="simpleLoading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          strokeWidth="10"
          r="32"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="2s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </SimpleLoadingStyle>
  );
}

export default SimpleLoading;
