import Fastify from "fastify";
import { PrismaClient } from '@prisma/client';
import { request } from "https";
import { REPLServer } from "repl";

const fastify = Fastify();
const prisma = new PrismaClient();

fastify.listen({port: 3000}, (err, address) => {
    if (err){
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

fastify.get('/questions', async (request, reply) => {
    const questions = await prisma.question.findMany();
    reply.send(questions);
})

fastify.get('/', async (request, reply) => {
    reply.send({message: "hello world"});
})