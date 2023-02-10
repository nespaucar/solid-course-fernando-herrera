import { PostService } from './05-dependency-b';
import {
    JsonDatabaseService,
    LocalDataBaseService,
    WebApiService
} from './05-dependency-c';

// Main
(async () => {

    // Cualquier clase que implemente el metodo abstracto
    // de PostProvider
    const provider = new WebApiService();
    //const provider = new LocalDataBaseService();
    //const provider = new JsonDatabaseService();

    const postService = new PostService(provider);
    const posts = await postService.getPosts();

    console.log({ posts })

})();