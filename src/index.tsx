import * as React from 'react';
import styled from '@emotion/styled';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

const StyledDialogOverlay = styled(DialogOverlay)`
  background: rgba(255, 255, 255, 0.9);
`;

const StyledDialogContent = styled(DialogContent)`
  background: #fff;
  box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
`;

export interface Props {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: Props) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <StyledDialogContent>
        <p>Hello world!</p>
        <p>
          <a href="https://example.com">This is a link</a>
        </p>
        <button onClick={onClose}>Close</button>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};
