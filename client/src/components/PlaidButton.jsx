import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';

axios.defaults.baseURL = 'http://localhost:3001/api';

function PlaidAuth({ publicToken }) {
  const [account, setAccount] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = await axios.post('/exchange_public_token', { public_token: publicToken });
        console.log('accessToken', accessToken.data);
        const auth = await axios.post('/auth', { access_token: accessToken.data.accessToken });
        console.log('auth data ', auth.data);
        setAccount(auth.data.numbers.ach[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return account && (
    <>
      <p>Account number: {account.account}</p>
      <p>Routing number: {account.routing}</p>
    </>
  );
}

function PlaidButton () {
  const [linkToken, setLinkToken] = useState();
  const [publicToken, setPublicToken] = useState();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.post('/create_link_token');
        setLinkToken(response.data.link_token);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      setPublicToken(public_token);
      console.log('success', public_token, metadata);
    },
  });

  return publicToken ? <PlaidAuth publicToken={publicToken} /> : (
    <button className='btn btn-primary btn-lg' onClick={() => open()} disabled={!ready}>
      Link Bank
    </button>
  );
}

export default PlaidButton;