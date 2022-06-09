import styled from 'styled-components';

const HeaderContainer = styled.header `
    background-color: #444444;
    display: flex;
    flex-flow: row nowrap;
    height: 90px;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;

    * div {
    margin: 0;
    padding: 0;
    }

    img {
        border-radius: 50%;
        left: 220px;
        position: absolute;
        top: 25px;
        height: 37.78px;
        width: 37.78px;
    }

    .icon-cart {
        position: absolute;
        color: #FFFFFF;
        height: 29.08px;
        top: 26.92px;
        left: 1191px;
        width: 33px;
    }


    @media screen and (max-width: 414px) {
        img {
            left: 20px;
        }

        .icon-cart {
            left: 365px;
        }
    }
`;

export default HeaderContainer;