import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';

const dirpath = path.join(__dirname,"../repository/podcasts.json");


export const repositoryPodcast = async (canal?:string):Promise<Podcast[]> =>{
    const rawData = fs.readFileSync(dirpath,'utf-8');
    let jsonFile = JSON.parse(rawData)

    if(canal){
        jsonFile = jsonFile.filter((podcast:Podcast)=> podcast.canal === canal )
    }
    return jsonFile;
}