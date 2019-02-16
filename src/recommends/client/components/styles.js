import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding: 1rem;
  min-width: 325px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const Flex = styled.div`
  display: flex;
  color: #D3D3D3;

  &:hover {
    color: #FFFFFF;
  }
`;

export const Toggle = styled.div`
  display: flex;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;

  opacity: ${props => props.fade ? 0 : 1};
  visibility: ${props => props.fade ? 'hidden' : 'visible'};
`;

export const Item = styled.div`
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0);
  height: 53px;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Icon = styled.i`
  color: #D3D3D3;
  width: 20px;
  padding: 0.5rem;
`;

export const Arrow = styled(Icon)`
  font-size: 1.25rem;
  padding: 0;
  padding-left: 0.5rem;
  color: inherit;
`;

export const Wrap = styled.div`
  flex: 1;
  min-width: 0;

  > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Title = styled.div`
  color: #FFFFFF;
  font-size: 1rem;
  cursor: default;
`;

export const Info = styled.div`
  color: #D3D3D3;
  font-size: 0.875rem;
  cursor: default;
`;

export const Button = styled.button`
  background-color: #000000;
  border-style: solid;
  border-color: #A9A9A9;
  border-radius: 20px;
  border-width: 3px;
  color: #FFFFFF;
  min-width: 80px;
  min-height: 30px;
  font-size: 0.75rem;

  &:hover {
    border-color: #FFFFFF;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #FFFFFF;
    color: #000000;
  }
`;

export const Refresh = styled(Button)`
  min-width: 100px;
  min-height: 40px;

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;

  opacity: ${props => props.fade ? 0 : 1};
  visibility: ${props => props.fade ? 'hidden' : 'visible'};
`;