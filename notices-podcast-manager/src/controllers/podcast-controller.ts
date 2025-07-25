import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/list-espisodes-service';
import { filterPodcasts } from '../services/filter-podcasts';

export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content = await serviceListEpisodes()
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(content))
}

export const filterPod  = async(req:IncomingMessage,res:ServerResponse)=>{
  
  const content = await filterPodcasts(req.url)
  res.writeHead(200, {"Content-Type":"application/json"})
  res.end(JSON.stringify(content))
}