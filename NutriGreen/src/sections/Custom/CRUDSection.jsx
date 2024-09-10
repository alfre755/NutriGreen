import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Button from "../../components/Main/Button";

const CRUDSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2vmax;
  justify-content: center;
  align-items: center;

  > .titulo {
    font-size: 30px;
  }

  > .buttonsWrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

function CRUDSection({ title, buttonConfig }) {
  return (
    <CRUDSectionStyle>
      <p className="titulo">{title}</p>
      <div className="buttonsWrapper">
        {buttonConfig.map(({ label, type, onClick }, index) => {
          return (
            <Button key={index} type={type} onClick={onClick}>
              {label}
            </Button>
          );
        })}
      </div>
    </CRUDSectionStyle>
  );
}

CRUDSection.propTypes = {};

export default CRUDSection;
