import React from 'react';
import { IoIosImages, IoIosVideocam, IoIosPlay, IoIosHeart, IoIosChatbubbles } from 'react-icons/io';
import { NextImage } from '../Image/Image';
import Wrapper, { Caption, TopRight, List, ListItem } from './InstagramCard.styled';

const InstagramCard = ({ type, image, numberOfView, numberOfcomment, numberOflike, onClick, style }) => {
  return (
    <Wrapper onClick={onClick} $cursor={onClick && onClick} style={style}>
      <NextImage
        src={image.src}
        height={image.height}
        width={image.width}
        alt="Post"
      />
      <TopRight>
        {type === 'gallery' && <IoIosImages />}
        {type === 'video' && <IoIosVideocam />}
      </TopRight>
      <Caption>
        <List>
          {type === 'video' ? (
            <ListItem>
              {numberOfView && (
                <>
                  {numberOfView}&nbsp; <IoIosPlay />
                </>
              )}
            </ListItem>
          ) : (
            <ListItem>
              {numberOflike && (
                <>
                  {numberOflike} &nbsp; <IoIosHeart />
                </>
              )}
            </ListItem>
          )}
          <ListItem>
            {numberOfcomment && (
              <>
                {numberOfcomment} &nbsp; <IoIosChatbubbles />
              </>
            )}
          </ListItem>
        </List>
      </Caption>
    </Wrapper>
  );
};

export default InstagramCard;