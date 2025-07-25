import * as http from 'http';
import { getListEpisodes, filterPod } from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { HttpMethods } from './utils/http-methods';

const server =  http.createServer(async (req:http.IncomingMessage, res: http.ServerResponse)=>{

    const [baseUrl, queryString] = req.url?.split('?') ?? ['',''];


    if(req.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req,res);
    }

    if(req.method === HttpMethods.GET && baseUrl === Routes.EPISODES){
        await filterPod(req,res);
    }
})

const port = process.env.PORT 
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})