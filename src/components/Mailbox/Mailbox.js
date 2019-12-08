import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: grey;

  background-color: ${props => (props.changeStyle ? 'palevioletred' : 'green')};
  padding: ${props => props.paddingValue || '10px'};
`;

const Mailbox = ({ name, unreadMessages, paddingValue, changeStyle }) => {
  return (
    <StyledDiv paddingValue={paddingValue} changeStyle={changeStyle}>
      <h1>Hello {name}.</h1>
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages.</p>
      ) : (
        <p>No unread messages.</p>
      )}

      <h2>
        {unreadMessages.length > 0 && (
          <p>You have {unreadMessages.length} unread messages.</p>
        )}
      </h2>
    </StyledDiv>
  );
};

export default Mailbox;
