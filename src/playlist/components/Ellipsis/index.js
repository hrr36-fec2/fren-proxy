import { MenuWrap, MenuBox } from './Ellipsis-SC.js';
import { ListIcon } from '../Styled.js';
import React, { useState, useEffect } from 'react';

const
  Ellipsis = ({ children }) => {
    let
      [showMenu, setShowMenu] = useState(false);
    let windowClick = function() {
      setShowMenu(false);
    };
    let handleClick = function(e) {
      e.preventDefault();
      setShowMenu(!showMenu);
    };
    useEffect(() => {
      document.addEventListener('click', windowClick);
      return () => document.removeEventListener('click', windowClick);
    });
    return (
      <React.Fragment>
        <ListIcon className="fas fa-ellipsis-h" onClick={handleClick}></ListIcon>
        {
          showMenu ?
            <MenuWrap>
              <MenuBox>{children}</MenuBox> 
            </MenuWrap> 
            : null
        }
      </React.Fragment>
    );
  };

export default Ellipsis;