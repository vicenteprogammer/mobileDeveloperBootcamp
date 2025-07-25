import { log } from "console";
import { repositoryPodcast } from "../repository/podcast-respository"
import { FilterPocast } from "../models/filter-podcast";
import { StatusCode } from "../utils/status-code";
import { Podcast } from "../models/podcast-model";


export const filterPodcasts = async (canal:string | undefined) =>{
    const podName = canal?.split('?p=')[1] ?? '';
    const data:Podcast[] = await repositoryPodcast(podName);

    const response: FilterPocast ={
        statusCode: 0,
        body : []
    }

    if(data.length !==0){
        response.statusCode = StatusCode.OK;
    }else{
        response.statusCode = StatusCode.NoContent;
    }

    response.body = data;

    return response;
}