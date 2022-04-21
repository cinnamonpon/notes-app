import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { applyMiddleware } from 'redux';
import client, { defaultMiddlewareConfig } from '@app/services/AxiosService';

import logger from './logger';

export default applyMiddleware(thunk, logger, axiosMiddleware(client, defaultMiddlewareConfig));
