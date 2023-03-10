import React from 'react';
import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { StatefulPopover } from 'baseui/popover';
import { Paragraph3 } from 'baseui/typography';

const Popover = ({ children, content, onConfirm, data }) => {
  const [css, theme] = useStyletron();
  const contentCx = css({
    padding: theme.sizing.scale500,
    maxWidth: '300px',
  });
  return (
    <StatefulPopover
      showArrow
      placement="top"
      dismissOnEsc={true}
      dismissOnClickOutside={true}
      accessibilityType={'tooltip'}
      content={({ close }) => (
        <div className={contentCx}>
          <Paragraph3 paddingBottom="scale400">{content}</Paragraph3>
          <Button onClick={close}>Cancel</Button>
          <Button
            onClick={() => {
              onConfirm(data);
              close();
            }}
          >
            Confirm
          </Button>
        </div>
      )}
    >
      {children}
    </StatefulPopover>
  );
};

export default Popover;