const photo7 = new Proxy({"src":"/_astro/Solar-Eclipse-2024-composite.BuWy7ZeW.jpg","width":2560,"height":366,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse/Solar-Eclipse-2024-composite.jpg";
							}
							
							return target[name];
						}
					});

export { photo7 as default };
