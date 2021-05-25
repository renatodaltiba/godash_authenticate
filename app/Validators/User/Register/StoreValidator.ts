import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
		email: schema.string({ trim: true} , [rules.email(), rules.unique({ table: 'users', column: 'email'})]),
		name: schema.string({ trim: true}),
		phone: schema.string({}, [rules.mobile({
			locales: ['pt-BR']
		})]),
		password: schema.string({ trim: true}),
		permissions: schema.string({trim: true})
  })
  public messages = {}
}
