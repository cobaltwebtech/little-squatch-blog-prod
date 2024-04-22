const id = "2024/solar-eclipse";
const collection = "albums";
const data = {title:"Total Solar Eclipse 2024",description:"Total solar eclipse in Central Texas April 2024",cover:
						new Proxy({"src":"/_astro/Solar-Eclipse-2024-composite.BuWy7ZeW.jpg","width":2560,"height":366,"format":"jpg","fsPath":"/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse/Solar-Eclipse-2024-composite.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse/Solar-Eclipse-2024-composite.jpg";
							}
							
							return target[name];
						}
					})
					};
const _internal = {
	type: 'data',
	filePath: "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse.yml",
	rawData: "title: Total Solar Eclipse 2024\ndescription: Total solar eclipse in Central Texas April 2024\ncover: ./solar-eclipse/Solar-Eclipse-2024-composite.jpg",
};

export { _internal, collection, data, id };
