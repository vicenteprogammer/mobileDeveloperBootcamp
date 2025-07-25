import * as http from 'http';
import { getListEpisodes, filterPod } from './controllers/podcast-controller';

const server =  http.createServer(async (req:http.IncomingMessage, res: http.ServerResponse)=>{

    const [baseUrl, queryString] = req.url?.split('?') ?? ['',''];


    if(req.method === 'GET' && baseUrl === '/api/list'){
        await getListEpisodes(req,res);
    }

    if(req.method === 'GET' && baseUrl === '/api/episode'){
        await filterPod(req,res);
    }
})

const port = process.env.PORT 
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})