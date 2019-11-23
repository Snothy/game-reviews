'use strict'

const Router = require('koa-router')
const bcrypt = require('bcrypt')
//Using koabody and bodyparser together breaks the code
const login = new Router({ prefix: '/login' })

login.get('/', async ctx => ctx.render('login.hbs'))

login.post('/', async ctx => {
	const { username, password } = ctx.request.body

	const user = await ctx.db.getUser(username)
	if (!user) {
		return ctx.render('login.hbs', { errorMsg: 'User does not exist' })
	}

	// if (await bcrypt.compare(password, user.hash)) {
	ctx.session.authorised = true
	ctx.session.userID = user.id
	return ctx.redirect('back')
	// } else {
		// return ctx.render('login.hbs', { errorMsg: 'Password incorrect' })
	// }
})

module.exports = login
