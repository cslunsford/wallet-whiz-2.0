import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePlaidLink } from 'react-plaid-link';
import { EXCHANGE_PUBLIC_TOKEN } from '../utils/mutations';
import { useMutation } from '@apollo/client';

axios.defaults.baseURL = 'http://localhost:3001/api';

function PlaidAuth({ publicToken }) {
  const [account, setAccount] = useState();
  const [exchangePublicToken] = useMutation(EXCHANGE_PUBLIC_TOKEN);

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = await exchangePublicToken({ variables: { publicToken }});
        console.log('accessToken', accessToken.data);
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