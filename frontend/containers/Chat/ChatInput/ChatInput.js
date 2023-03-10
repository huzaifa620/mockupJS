import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { Input } from 'baseui/input';
import Wrapper, { Send } from './ChatInput.styled';

const ChatInput = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={onChange}
        placeholder="Write Something"
        overrides={{
          EndEnhancer: {
            style: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          },
        }}
        endEnhancer={
          <Send onClick={onSubmit}>
            <IoIosSend size="18px" />
          </Send>
        }
      />
    </Wrapper>
  );
};

export default ChatInput;