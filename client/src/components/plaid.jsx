// APP COMPONENT
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const plaidApp = () => {
  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    const response = await fetch('/api/create_link_token', {
      method: 'POST',
    });
    const data = await response.json();
    setLinkToken(data.link_token);
  };

  useEffect(() => {
    generateToken();
  }, []);

  return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};

// LINK COMPONENT
const Link = (props) => {
  const onSuccess = React.useCallback((public_token, metadata) => {
    const response = fetch('/api/set_access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token }),
    });
    // Handle response ...
  }, []);

  const config = {
    token: props.linkToken,
    receivedRedirectUri: window.location.href,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Link account
    </button>
  );
};

export default plaidApp;