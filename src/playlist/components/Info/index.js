import React, { useContext } from 'react';

import { 
  Anch,  
  ArtCover, 
  InfoName,
  InfoContainer, 
  InfoPlayButton
} from '../Styled.js';

import { PlayListContext } from '../Context.js';
import Ellipsis from '../Ellipsis';

const Info = () => {
  let
    ctx = useContext(PlayListContext);
  let handleTest = function() {
    console.log('this works');
  };
  return (
    <InfoContainer>
      <ArtCover>
        <img height="230px" width="230px" src="https://picsum.photos/300/300/?random"/>
      </ArtCover>
      <InfoName>
        {ctx.playlist_name}
      </InfoName>
      <Anch style={{color: '#b2b2b2', fontSize: '14px'}}>
        {ctx.playlist_owner}
      </Anch>
      <InfoPlayButton onClick={() => {
        ctx.handlePlayClick(ctx.song_tracks[0].track_id, ctx.song_tracks[0].track_duration); 
      }}>
        { ctx.isPlaying ? 'pause' : 'play' }
      </InfoPlayButton>
      <div style={{color: '#b2b2b2', fontSize: '14px'}}>
        {ctx.song_count} songs
      </div>
      <div style={{margin: '1rem 0'}}>
        <Ellipsis>
          <button onClick={handleTest}>Start Radio</button>
          <button onClick={handleTest}>Delete Playlist</button>
          <button onClick={handleTest}>Copy Playlist link</button>
        </Ellipsis>
      </div>
    </InfoContainer>
  );
};

export default Info;