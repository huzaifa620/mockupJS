import React from 'react';
import Scrollspy from 'react-scrollspy';
import { ListItem, AnchorText } from './ScrollSpyMenu.styled';
import { Block } from 'baseui/block';


const ScrollSpyMenu = ({ items, showCounter, isSeparator, menuItemOffset, ...props }) => {
  const scrollItems = [];

  items.forEach(item => {
    const path = item.split(' ').join('_');
    scrollItems.push(path);
  });

  return (
    <Scrollspy
      className="scrollspy-menu"
      items={scrollItems}
      currentClassName="is-current"
      {...props}
    >
      {items.map((item, index) => {
        const path = item.split(' ').join('_');

        function pad(index) {
          let valString = index + '';
          if (valString.length < 2) {
            return '0' + valString;
          } else {
            return valString;
          }
        }

        return (
          <ListItem key={`scroll-item--key${index}`}>
            <AnchorText href={`#${path}`} offset={menuItemOffset}>
              {showCounter && pad(index)}
              {isSeparator && (
                <Block as="span" paddingLeft="5px" paddingRight="5px"></Block>
              )}
              {item}
            </AnchorText>
          </ListItem>
        );
      })}
    </Scrollspy>
  );
};

export default ScrollSpyMenu;