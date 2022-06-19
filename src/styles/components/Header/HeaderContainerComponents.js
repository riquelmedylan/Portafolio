import styled from "styled-components";
import { Device } from "../../Breakpoints";

export const HeaderContainerComponents = styled.section`
  width: 16rem;
  @media ${Device.mls} {
    padding-top: 50px;
    width: 22rem;
  }
`;

export const HeaderContainerImgProfile = styled.picture`
    background-color: #1b171f66;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/portafolio-d78d1.appspot.com/o/Dylan.png?alt=media&token=e5e05cbf-d440-47b9-917f-a880c6629fac);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 276px 234px;
     border: 7.5px solid #131020;
    border-radius: 100%;
display:block;
    height: 17em;
    @media ${Device.mls}{
        background-size: 300px 300px;
        height: 20em;
    }
}
`;
