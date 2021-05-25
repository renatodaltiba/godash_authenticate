import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users/register'


Route.get('/', async () => {
  return { hello: 'world' }
})
