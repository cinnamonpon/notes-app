import app from '@config/app';
import axios from 'axios';

export const defaultMiddlewareConfig = {
  returnRejectedPromiseOnError: true,
  interceptors: {
    request: [
      (config, req) => req,
    ],
    response: [{
      error: async (config, error) => error,
      success: (s, response) => response,
    },
    ],
  },
  onSuccess(data) {
    const { action, dispatch, response: r = {} } = data;
    const response = r.response || r;
    const payload = r;
    const request = action.payload.request || {};

    if (response.status >= 200 && response.status < 300 && !action.type.endsWith('_SUCCESS')) {
      dispatch({ type: `${action.type}_SUCCESS`, payload, params: request.data || request.params });
    } else if (!action.type.endsWith('_FAILED') && !action.type.endsWith('_SUCCESS') && response.status >= 300) {
      dispatch({ type: `${action.type}_FAILED`, payload });
      throw r;
    }

    return payload;
  },
  onError(data) {
    const { action, dispatch, error } = data;
    dispatch({ type: `${action.type}_FAILED`, payload: error.response });
    return data;
  },
};

const client = axios.create({
  baseURL: app.apiUrl,
  responseType: 'json',
});

export default client;
