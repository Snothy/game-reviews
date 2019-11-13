/**
 * Creates a common Koa app
 */

'use strict'

const path = require('path')

const Koa = require('koa')
const Views = require('koa-views')
const serve = require('koa-static')

const app = new Koa()
const handlebars = new Views(
	path.join(__dirname, '/views'),
	{
		map: { hbs: 'handlebars' },
		extension: 'hbs'
	}
)

const login = require('./controllers/login')
const list = require ('./controllers/listrouter') 
const signup = require('./controllers/signup')
const homepage = require('./controllers/homepage')
const games = require('./controllers/games')

app.use(handlebars)
app.use(login.routes())
app.use(list.routes()) 
app.use(signup.routes())
app.use(homepage.routes())
app.use(games.routes())
app.use(serve(path.join(__dirname, './public')))
module.exports = app
