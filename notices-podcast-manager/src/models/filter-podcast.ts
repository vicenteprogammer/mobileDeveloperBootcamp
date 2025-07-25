import { Podcast } from "./podcast-model";

export interface FilterPocast{
    statusCode : number,
    body: Podcast[]
}