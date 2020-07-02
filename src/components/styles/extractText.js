import styled from 'styled-components';

export const Top = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 24px;
    text-align: center;
  }
  .upload {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    .imgUpload {
      margin: 0 0 10px 0;
      width: 100%;
      label {
        display: block;
        text-align: center;
        padding: 0.5em;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.06em;
        border: 1px dashed #3880ff;
        border-radius: 4px;
        height: 300px;
        width: 100%;
      }
      input[type='file'] {
        opacity: 0;
        z-index: -1;
        position: absolute;
        width: 20px;
      }
    }
    .display {
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 100%;
      border-radius: 4px;
      textarea {
        height: 90%;
        width: 100%;
        border: none;
        outline: none;
        resize: none;
        padding: 10px;
        color: #2f2f2f;
      }
      button {
        align-self: flex-end;
      }
    }
  }

  @media (min-width: 769px) {
    h3 {
      font-size: 32px;
      text-align: left;
    }

    .upload {
      flex-direction: row;
      justify-content: space-between;
      .imgUpload {
        width: 40%;
      }
      .display {
        width: 40%;
      }
    }
  }
`;
