'use strict'

class Game {
	// eslint-disable-next-line max-params
	constructor(title, platforms, slugline, summary, releaseDate, developer, publisher,
		submittedBy, approved, poster, splash) {
		this.gameID = -1
		this.title = title
		this.platforms = platforms
		this.slugline = slugline
		this.summary = summary
		this.releaseDate = releaseDate
		this.developer = developer
		this.publisher = publisher
		this.submittedBy = submittedBy
		this.approved = approved
		this.poster = poster
		this.splash = splash
	}
}

module.exports = Game
