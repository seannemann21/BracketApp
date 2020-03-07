import {useState, useContext, useCallback, useEffect} from 'react';
import axios from 'axios';
import {AuthContext} from '../App';

const createAPI = authToken => {
  return axios.create({
    baseURL: 'http://10.0.2.2:3000/',
    headers: {Authorization: `Bearer ${authToken}`},
  });
};

const useAPI = (url, lazy = false, isPost = false) => {
  const value = useContext(AuthContext);
  const authToken = value.userToken;

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const sendRequest = useCallback(
    async (body = {}) => {
      setIsLoading(true);
      const request = isPost
        ? createAPI(authToken).post(url, {
            body,
          })
        : createAPI(authToken).get(url);
      setResponse(await request);
      setIsLoading(false);
    },
    [isPost, authToken, url],
  );

  useEffect(() => {
    if (!lazy && sendRequest) {
      sendRequest();
    }
  }, [lazy, sendRequest]);

  return lazy ? {isLoading, sendRequest, response} : {isLoading, response};
};

export default useAPI;
