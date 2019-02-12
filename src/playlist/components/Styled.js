import sc from 'styled-components';

export const Anch = sc.a`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Container = sc.div`
  box-sizing      : border-box;
  min-height      : 100vh;
  font-family     : 'Montserrat', sans-serif;
  color           : #fff;
  display         : flex;
  padding         : 1rem 2rem;
`;

// --- Info

export const InfoContainer = sc.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

export const InfoName = sc.div`
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 2.25rem;
  margin-top: 1rem;
`;

export const ArtCover = sc.div`
  height: 14.35rem;
  width: 14.35rem;
`;

export const InfoPlayButton = sc.button`
  width: 70%;
  background-color: #1db954;
  outline: 0;
  border: 0;
  border-radius: 500px;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: none 33ms cubic-bezier(.3, 0, .7, 1);
  :hover {
    background-color: #1ed760;
    transform: scale(1.06);
    transition: none 33ms cubic-bezier(.3, 0, 0, 1);
  }
  :active {
    transform: scale(1.01);
    background-color: #1db954;
  }
`;

// --- List
export const ListContainer = sc.ul`
  width: 80%;
  list-style: none;
`;

export const ListIcon = sc.i`
  width: 18px;
  height: 18px;
  font-size: 18px;
`;

export const TrackDetails = sc.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: .7rem;
  background-color: ${props => props.isSelected && '#343434'};
  color: ${props => props.isTrackPlaying && '#1ed760'};
  :hover {
    background-color: #414141;
  }
`;

export const TrackInfo = sc.div`
  right-margin: auto;
  padding: 0 1rem;
`;

export const TrackDuration = sc.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

/**
 *  background-image: linear-gradient(130deg, #595858, #3a3a3a);
 *  list color
 *  darker : #343434
 */
