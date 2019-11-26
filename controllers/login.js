'use strict'

const Router = require('koa-router')
const koaBody = require('koa-body')
const bcrypt = require('bcrypt')

const login = new Router({ prefix: '/login' })

login.use(koaBody())

login.get('/', async ctx => ctx.render('login.hbs'))

login.post('/', async ctx => {
	const { username, password } = ctx.request.body

	const user = await ctx.db.getUser(username)
	if (!user) {
		return ctx.render('login.hbs', { errorMsg: 'User does not exist', user: ctx.session.authorised})
	}

	if (await bcrypt.compare(password, user.hash)) {
		ctx.session.authorised = true
		ctx.session.userID = user.id
		return ctx.redirect('homepage')
	} else {
		return ctx.render('login.hbs', { errorMsg: 'Password incorrect', user: ctx.session.authorised})
	}
})

module.exports = login
