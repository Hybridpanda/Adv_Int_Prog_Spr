export default {
	plugins: [
		[
			"umi-plugin-react",
			{
				antd: true,
			},
		],
	],
	routes: [
		{
			path: "/",
			component: "./login",
		},

		{
			path: "/",
			component: "../layout",
			routes: [
				{
					path: "/HomePage",
					routes: [
						{ path: "/HomePage", component: "HomePage/index" },

					],
				},
				{
					path: "/Owing",
					routes: [
						{ path: "/Owing", component: "Owing/index" },

					],
				},
				{
					path: "/Owed",
					routes: [
						{ path: "/Owed", component: "Owed/index" },
		
					],
				},
				{
					path: "/Request",
					routes: [
						{ path: "/Request", component: "Request/index" },
					
					],
				},
				{
					path: "/Ranking",
					routes: [
						{ path: "/Ranking", component: "Ranking/index" },
		
					],
				},
			],
		},
	],
};
