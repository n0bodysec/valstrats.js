module.exports = Object.freeze({
	API_URL: 'https://backend.hitboxking.com', // https://backend.hitboxking.com/socket.io/

	Endpoints: { // find
		Strats: 'strats',
		Characters: 'characters',
		Maps: 'maps',
		Teams: 'teams',
		Tournaments: 'tournaments',
	},

	UserEndpoints: { // get
		Users: 'users',
		Likes: 'user-manage-likes',
		Favorites: 'user-manage-saved-favorites',

	},

	StratEndpoins: {
		UserPost: 'strat-user-post',
	},

	StratSortTypes: {
		Newly: 'createdAt',
		Popular: 'likesCount',
		Comments: 'commentsCount',
	},
});
