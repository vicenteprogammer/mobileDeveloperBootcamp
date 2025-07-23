import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';

const dirpath = path.join(__dirname,"../repository/podcasts.json");


export const repositoryPodcast = async ():Promise<Podcast> =>{
    const rawData = fs.readFileSync(dirpath,'utf-8');
    const jsonFile = JSON.parse(rawData)
    return jsonFile;
}