import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/list-espisodes-service';
import { filterPodcasts } from '../services/filter-podcasts';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content = await serviceListEpisodes()
    res.writeHead(StatusCode.OK,{"Content-Type":ContentType.JSON});
    res.end(JSON.stringify(content))
}

export const filterPod  = async(req:IncomingMessage,res:ServerResponse)=>{
  
  const content = await filterPodcasts(req.url)
  res.writeHead(StatusCode.OK, {"Content-Type":"application/json"})
  res.end(JSON.stringify(content))
}