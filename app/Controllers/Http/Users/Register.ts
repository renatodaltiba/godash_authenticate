import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { StoreValidator } from 'App/Validators/User/Register'  
// table.increments('id').primary()
// table.string('email', 255).notNullable()
// table.string('name', 255)
// table.integer('phone', 11)
// table.string('password', 180).notNullable()
// table.string('remember_me_token').nullable()
export default class UserRegisterController {
  public async index ({}: HttpContextContract) {
  }

  public async store ({ request }: HttpContextContract) {
    const { email, name, phone, password, permissions } = await request.validate(StoreValidator)

    const user = await User.create({ email, name, phone, password, permissions})

    await user.save()

    return user
  }

  public async show ({}: HttpContextContract) {
    
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
