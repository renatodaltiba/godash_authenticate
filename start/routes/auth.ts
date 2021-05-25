import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


Route.post('auth', 'Auth/Main.store')
Route.delete('auth', 'Auth/Main.destroy').middleware(['auth'])

Route.get('me', async ({auth}: HttpContextContract) => {
  const dados = {
    name: auth.user?.name,
    email: auth.user?.email,
    phone: auth.user?.phone,
    permissions: auth.user?.permissions
  }
  return dados

}).middleware('auth')