import {
    LocalDataBaseService,
    JsonDatabaseService,
    PostProvider
} from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}

export class PostService
{
    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        //this.posts = await jsonDB.getFakePosts();
        return await this.postProvider.getPosts();
    }
}