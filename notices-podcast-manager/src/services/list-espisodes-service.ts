import { repositoryPodcast } from "../repository/podcast-respository"

export const serviceListEpisodes= async()=>{
    const data =  await repositoryPodcast();
    return data;
}