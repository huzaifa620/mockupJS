import React from 'react';
import Wrapper, { Content, Icon, Info, Title, Action, Button, Label } from './WidgetCard.styled';

const WidgetCard = ({ icon, color, title, description, btntext, label, onClick, style }) => {
  return (
    <Wrapper style={style}>
      <Content>
        {icon && <Icon $color={color}>{icon}</Icon>}
        <Info>
          <Title>{title}</Title>
          <Label>{description}</Label>
        </Info>
      </Content>
      {btntext || label ? (
        <Action>
          <Button $color={color} onClick={onClick}>
            {btntext}
          </Button>
          <Label>{label}</Label>
        </Action>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default WidgetCard;