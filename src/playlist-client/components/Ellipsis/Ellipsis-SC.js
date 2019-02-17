import sc from 'styled-components';

export const MenuWrap = sc.div`
  position: relative;
`;

export const MenuBox = sc.div`
  border: .5px solid rgba(0,0,0,.15);
  position: absolute;
  z-index: 1001;
  margin-top: .4rem
  width: 8rem;
  left: -3.4rem;
  
  > button {
    border: 0;
    outline: 0;
    width: 100%;
    color: #b2b2b2;
    font-size: 12px;
    padding: .5rem 1rem;
    background-color: #282828;
    :hover {
      background-color: #414141;
    }
  }

`;