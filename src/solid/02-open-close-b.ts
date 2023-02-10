import { HttpClient } from './02-open-close-c';
// Hay que agregar la dependencia de axios ```yarn add axios```
export class TodoService
{
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}

export class PostService
{
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}

export class PhotosService
{
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }
}
