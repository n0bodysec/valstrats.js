export default Object.freeze({
	backendUrl: 'https://backend.hitboxking.com', // https://backend.hitboxking.com/socket.io/

	services: {
		users: 'users',
		characters: 'characters',
		teams: 'teams',
		maps: 'maps',
		tournaments: 'tournaments',
		regions: 'regions',
		strats: 'strats',
		characterAbility: 'character-skills',
		uploadStratImage: 'upload-strat-image',
		userManageSavedFavorites: 'user-manage-saved-favorites',
		userManageLikes: 'user-manage-likes',
		stratUserPost: 'strat-user-post',
		reportStrat: 'report-strat',
		stratUserRanking: 'strat-user-ranking',
		uploadStratVideo: 'upload-strat-video',
		stratGenVideoLink: 'strat-gen-videolink',
	},

	sortTypes: {
		newly: 'createdAt',
		popular: 'likesCount',
		comments: 'commentsCount',
	},
});
