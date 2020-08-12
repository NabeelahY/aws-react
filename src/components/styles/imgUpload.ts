import styled from 'styled-components';

export const Bottom = styled.div`
  margin: 20px 0;
  h3 {
    font-size: 24px;
  }

  input[type='file'] {
    margin: 20px 0;
    width: 100%;
  }

  .ant-progress {
    margin: 0 0 20px 0;
  }

  @media (min-width: 769px) {
    h3 {
      font-size: 32px;
    }
  }
`;
