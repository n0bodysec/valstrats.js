module.exports = Object.freeze({
	API_URL: 'https://backend.hitboxking.com', // https://backend.hitboxking.com/socket.io/

	Endpoints: { // find
		Strats: 'strats',
		Characters: 'characters',
		Maps: 'maps',
		Teams: 'teams',
		Tournaments: 'tournaments',

		User: { // get
			Users: 'users',
			Likes: 'user-manage-likes',
			Favorites: 'user-manage-saved-favorites',
		},

		Strat: { // create
			UserPost: 'strat-user-post',
			Report: 'report-strat',
		},
	},

	StratSortTypes: {
		Newly: 'createdAt',
		Popular: 'likesCount',
		Comments: 'commentsCount',
	},
});
