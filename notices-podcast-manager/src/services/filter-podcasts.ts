import { log } from "console";
import { repositoryPodcast } from "../repository/podcast-respository"


export const filterPodcasts = async (canal:string | undefined) =>{
    const podName = canal?.split('?p=')[1] ?? '';
    const data = repositoryPodcast(podName);
    return data;
}