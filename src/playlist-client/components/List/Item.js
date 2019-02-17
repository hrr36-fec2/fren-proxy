import { Anch, ListIcon, TrackDetails, TrackDuration, TrackInfo } from '../Styled.js';
import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { PlayListContext } from '../Context.js';
import Ellipsis from '../Ellipsis';
import PropTypes from 'prop-types';

const
  Item = ({
    song: { track_id, track_title, artist_name, album_title, track_duration }
    , iconSet, isTrackPlaying, isSelected, handleSelect, index
  }) => {
    let
      ctx                             = useContext(PlayListContext),
      [statusIcon, setStatusIcon]     = useState(iconSet[0]),
      [showEllipsis, setShowEllipsis] = useState(false);
    let handleItemClick = function() {
      handleSelect(track_id);
    };
    let handleMouseOver = function() {
      if (!isSelected) {
        setShowEllipsis(!showEllipsis);
      }
    };
    useEffect(() => {
      if (isSelected) {
        setShowEllipsis(true);
        setStatusIcon(iconSet[1]);
      } else {
        setShowEllipsis(false);
        setStatusIcon(iconSet[0]);
      }
    }, [isSelected]);
    useLayoutEffect(() => {
      if (isTrackPlaying && ctx.isPlaying && isSelected) {
        setStatusIcon(iconSet[1]);
      } else {
        setStatusIcon(iconSet[0]);
      }
    }, [ctx.activeTrack, ctx.isPlaying]);
    return (
      <React.Fragment>
        <li onClick={handleItemClick} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
          <TrackDetails id={track_id} isSelected={isSelected} isTrackPlaying={isTrackPlaying}>
            <div onClick={() => { ctx.handlePlayClick(track_id, track_duration); }}>
              <ListIcon className="material-icons" >
                {statusIcon}
              </ListIcon>
            </div>
            <TrackInfo>
              <div>{track_title}</div>
              <div style={{margin: '0 .1rem', color: '#b2b2b2', fontSize: '14px'}}>
                <Anch>{artist_name}</Anch>
                <span>&nbsp; {'  .  '} &nbsp;</span>
                <Anch>{album_title}</Anch>
              </div>
            </TrackInfo>
            <TrackDuration>
              {
                showEllipsis && 
                <div style={{ 'width': '2rem' }}>
                  <Ellipsis>
                    <button>Save to Favorites</button>
                    <button>Add to Queue</button>
                    <button onClick={()=>{ ctx.handleRemoveTrack(index, track_id); }}>Remove from Playlist</button>
                    <button>Copy Song Link</button>
                  </Ellipsis>
                </div>
              }
              &nbsp;&nbsp;{' '}&nbsp;&nbsp;
              <span>
                { track_duration.split(':')[1] }{':'}{ track_duration.split(':')[2] }
              </span>
            </TrackDuration>
          </TrackDetails>
        </li>
      </React.Fragment>
    );
  };

Item.propTypes = {
  song: PropTypes.object.isRequired,
  iconSet: PropTypes.array,
  isSelected: PropTypes.bool,
  handleSelect: PropTypes.func
};


export default Item;

/*
<div style={{ position: 'absolute' }}>
                  <Ellipsis>
                    <button>Hello</button>
                  </Ellipsis>
                </div>
*/
