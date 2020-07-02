import styled from 'styled-components';

const AppStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  h1 {
    color: #fff;
  }
  width: 100%;
  margin: 10px auto;

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Anton', sans-serif;
    margin: 20px 0;
    text-align: center;

    h3 {
      font-size: 28px;
      font-weight: bold;
      color: #001529;
    }
    .img {
      width: 100%;
      height: 300px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 300px;
  }

  @media (min-width: 769px) {
    width: 70%;
    .hero {
      flex-direction: row;
      align-items: baseline;
      h3 {
        font-size: 36px;
      }
      .img {
        width: 40%;
      }
    }
  }
`;

export default AppStyles;
