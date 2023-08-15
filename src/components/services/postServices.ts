import {IPost} from "../interfaces/postInterface";

import axios, {AxiosResponse} from "axios";


type IRes<T> = Promise<AxiosResponse<T>>

const postService = {
    getAll: ():IRes<IPost[]> => axios.get('https://jsonplaceholder.typicode.com/posts')
}

export {postService}