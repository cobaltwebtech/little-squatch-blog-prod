const photo3 = new Proxy({"src":"/_astro/Solar-Eclipse-2024-3.ClIYwFbk.jpg","width":2560,"height":2560,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse/Solar-Eclipse-2024-3.jpg";
							}
							
							return target[name];
						}
					});

export { photo3 as default };
