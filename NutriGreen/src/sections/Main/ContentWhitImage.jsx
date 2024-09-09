import React from "react";
import PT from "prop-types";
import styled from "@emotion/styled";
import Button from "../../components/Main/Button";

const ContentWhitImageStyle = styled.section`
  display: flex !important;
  justify-content: center;
  align-items: center;

  > .contentWrapper {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    height: 40vh;
    padding: 1em;
    gap: 1em;

    > .titulo {
      font-size: 70px;
    }

    > .subtitulo {
      font-size: 30px;
    }

    > .buttonsWrapper {
      display: flex;
      gap: 2em;
    }
  }

  > .imageWrapper {
    padding: 1em;
    display: flex;
    flex-basis: 50%;
    height: 40vh;
    justify-content: center;

    > img {
      padding: 2vmax;
      width: 100%;
      height: auto;
    }
  }
`;

function ContentWhitImage({ image, title, subtitle, buttonConfig }) {
  return (
    <ContentWhitImageStyle>
      <div className="contentWrapper">
        <p className="titulo">{title}</p>
        <p className="subtitulo">{subtitle}</p>
        <div className="buttonsWrapper">
          {buttonConfig.map(({ type, label, onClick }, index) => {
            return (
              <Button key={index} type={type} onClick={onClick}>
                {label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="imageWrapper">{image}</div>
    </ContentWhitImageStyle>
  );
}

ContentWhitImage.propTypes = {};

export default ContentWhitImage;
