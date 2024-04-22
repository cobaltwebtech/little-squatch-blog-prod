const SolarEclipse20247 = new Proxy({"src":"/_astro/Solar-Eclipse-2024-7.DJXmkpZ5.jpg","width":2560,"height":2560,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/albums/2024/solar-eclipse/Solar-Eclipse-2024-7.jpg";
							}
							
							return target[name];
						}
					});

export { SolarEclipse20247 as default };
