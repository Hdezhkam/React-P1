import http from './httpService';
import config from '../../src/config.json';

export function createPost(post) {
    return http.post(config.api_post, post);
}
