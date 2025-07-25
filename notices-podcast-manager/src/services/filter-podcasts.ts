import { repositoryPodcast } from "../repository/podcast-respository"


export const filterPodcasts = async (canal:string) =>{
    const data = repositoryPodcast(canal);
    return data;
}