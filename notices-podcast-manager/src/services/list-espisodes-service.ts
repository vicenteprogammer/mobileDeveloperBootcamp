import { FilterPocast } from "../models/filter-podcast";
import { Podcast } from "../models/podcast-model";
import { repositoryPodcast } from "../repository/podcast-respository"
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes= async()=>{
    let response: FilterPocast={
        statusCode : 0,
        body:[]
    }

    const data:Podcast[] =  await repositoryPodcast();

    if(data.length !== 0){
        response.statusCode = StatusCode.OK;
    }else{
        response.statusCode = StatusCode.NoContent;
    }

    response.body = data
    return response;
}