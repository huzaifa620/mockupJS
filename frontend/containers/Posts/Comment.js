import React from 'react';
import { Avatar } from 'baseui/avatar';
import { CommentCard, CommentInfo, CommentAuthor, CommentTime, Button } from './Posts.styled';

const Comment = ({ role, avatar, name, content, handleLike, handleReply }) => {
  
  const renderHtml = (data) => {
    return { __html: data };
  };

  return (
    <>
      {role === 'author' && (
        <CommentCard className="author comment">
          <Avatar name={name} size="scale1000" src={avatar} />
          <CommentInfo className="info">
            <CommentAuthor>{name}</CommentAuthor>
            <span dangerouslySetInnerHTML={renderHtml(content)} />
          </CommentInfo>
        </CommentCard>
      )}
      {role === 'user' && (
        <CommentCard className="user comment">
          <Avatar name={name} size="scale1000" src={avatar} />
          <CommentInfo className="info">
            <CommentAuthor>{name}</CommentAuthor>
            <span dangerouslySetInnerHTML={renderHtml(content)} />
            <CommentTime className="time">
              {handleLike && (
                <Button type="button" onClick={handleLike}>
                  1 like
                </Button>
              )}
              {handleReply && (
                <Button type="button" onClick={handleReply}>
                  Reply
                </Button>
              )}
            </CommentTime>
          </CommentInfo>
        </CommentCard>
      )}
    </>
  );
};

export default Comment;
