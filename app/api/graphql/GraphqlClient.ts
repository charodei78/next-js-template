import { GRAPHQL_API_URL } from '../../constants/API.constants';
import { Chain } from './zeus';

/**
 * For using zeus you should run zeus <graphql url> .\app\api\graphql\ --ts
 */

const client = Chain(GRAPHQL_API_URL);

export default client;