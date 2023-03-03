import Fastify from 'fastify'

async function bootstrap() {
  const app = Fastify()
  app.get('/', async () => {
    return { message: 'API Ok' }
  })
  await app.listen({ port: 3333 })
}

bootstrap()
  .then(() => console.log('Server is running!'))
  .catch((err) => console.log('Error', err))
