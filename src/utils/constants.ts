export default Object.freeze({
	backendUrl: 'https://backend.valostrats.com', // https://backend.valostrats.com/socket.io/
	cdnUrl: 'https://media.valostrats.com',

	services: {
		users: 'users',
		characters: 'characters',
		teams: 'teams',
		players: 'players',
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
		articleCategories: 'article-categories',
		articles: 'articles',
		articleGenerateTranslation: 'article-translator',

		// deprecated/removed?
		uploadStratVideoOld: 'upload-strat-video',
	},

	sortTypes: {
		newly: 'createdAt',
		popular: 'likesCount',
		comments: 'commentsCount',
	},
});
