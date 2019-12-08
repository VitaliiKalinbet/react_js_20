import React from "react";

const Mailbox = ({ name, unreadMessages }) => {
  return (
    <div>
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
    </div>
  );
};

export default Mailbox;
