export default Object.freeze({
	backendUrl: 'https://backend.valostrats.com', // https://backend.valostrats.com/socket.io/

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
		uploadStratVideo: 'upload-video-cdn',
		stratGenVideoLink: 'strat-gen-videolink',
		stratsSearch: 'strats-search',
		stratUserRankingMonthly: 'strat-user-ranking-monthly',

		// deprecated/removed?
		uploadStratVideoOld: 'upload-strat-video',
	},

	sortTypes: {
		newly: 'createdAt',
		popular: 'likesCount',
		comments: 'commentsCount',
	},
});
