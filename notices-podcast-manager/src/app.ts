import * as http from 'http';
import { getListEpisodes, filterPod } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

 export const app =  (async (req:http.IncomingMessage, res: http.ServerResponse)=>{

    const [baseUrl, queryString] = req.url?.split('?') ?? ['',''];


    if(req.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req,res);
    }

    if(req.method === HttpMethods.GET && baseUrl === Routes.EPISODES){
        await filterPod(req,res);
    }
})