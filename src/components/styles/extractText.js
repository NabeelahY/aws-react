import styled from 'styled-components';

export const Top = styled.div`
  width: 80%auto;
  h3 {
    font-size: 32px;
  }
  .upload {
    display: flex;
    justify-content: space-between;
    .imgUpload {
      width: 30%;
      label {
        display: block;
        line-height: 20;
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
      }
    }
    .display {
      display: flex;
      flex-direction: column;
      height: 300px;
      width: 40%;
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
`;
