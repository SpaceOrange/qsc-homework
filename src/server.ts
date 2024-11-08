import Fastify from "fastify";
import { request } from "https";

const fastify = Fastify();

fastify.listen({port: 3000}, (err, address) => {
    if (err){
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

fastify.get('/', (request, reply) => {
    reply.send("hello world");
})