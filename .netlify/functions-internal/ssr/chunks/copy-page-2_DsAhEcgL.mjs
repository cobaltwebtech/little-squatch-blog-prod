const id = "copy-page-2.mdx";
						const collection = "blog";
						const slug = "copy-page-2";
						const body = "\n# Title\n\n**If you know HTML, you already know enough to write your first Astro component.**\n\nAstro component syntax is a superset of HTML. The syntax was [designed to feel familiar to anyone with experience writing HTML or JSX](#differences-between-astro-and-jsx), and adds support for including components and JavaScript expressions.\n\n## JSX-like Expressions\n\nYou can define local JavaScript variables inside of the frontmatter component script between the two code fences (`---`) of an Astro component. You can then inject these variables into the component's HTML template using JSX-like expressions!\n\nnote\\[dynamic vs reactive]\nUsing this approach, you can include **dynamic** values that are calculated in the frontmatter. But once included, these values are not **reactive** and will never change. Astro components are templates that only run once, during the rendering step.\n\nSee below for more examples of [differences between Astro and JSX](#differences-between-astro-and-jsx).\n\n### Variables\n\nLocal variables can be added into the HTML using the curly braces syntax:\n\n```html\n---\nconst name = 'Astro'\n---\n\n<div>\n\t<h1>Hello {name}!</h1>\n\t<!-- Outputs <h1>Hello Astro!</h1> -->\n</div>\n```\n\n### Dynamic Attributes\n\nLocal variables can be used in curly braces to pass attribute values to both HTML elements and components:\n\n```astro\n---\nconst name = 'Astro'\n---\n\n<h1 class={name}>Attribute expressions are supported</h1>\n\n<MyComponent templateLiteralNameAttribute={`MyNameIs${name}`} />\n```\n\ncaution\nHTML attributes will be converted to strings, so it is not possible to pass functions and objects to HTML elements.\nFor example, you can't assign an event handler to an HTML element in an Astro component:\n\n```astro\n---\n// dont-do-this.astro\nfunction handleClick() {\n\tconsole.log('button clicked!')\n}\n---\n\n<!-- ❌ This doesn't work! ❌ -->\n<button onClick={handleClick}>Nothing will happen when you click me!</button>\n```\n\nInstead, use a client-side script to add the event handler, like you would in vanilla JavaScript:\n\n```astro\n---\n// do-this-instead.astro\n---\n\n<button id='button'>Click Me</button>\n<script>\n\tfunction handleClick() {\n\t\tconsole.log('button clicked!')\n\t}\n\tdocument.getElementById('button').addEventListener('click', handleClick)\n</script>\n```\n\n## ressions\n\n### Dynamic HTML\n\nLocal variables can be used in JSX-like functions to produce dynamically-generated HTML elements:\n\n```astro\n---\nconst items = ['Dog', 'Cat', 'Platypus']\n---\n\n<ul>\n\t{items.map((item) => <li>{item}</li>)}\n</ul>\n```\n\nAstro can conditionally display HTML using JSX logical operators and ternary expressions.\n\n```astro\n---\nconst visible = true\n---\n\n{visible && <p>Show me!</p>}\n\n{visible ? <p>Show me!</p> : <p>Else show me!</p>}\n```\n\n### Dynamic Tags\n\nYou can also use dynamic tags by setting a variable to an HTML tag name or a component import:\n\n```astro\n---\nimport MyComponent from './MyComponent.astro'\nconst Element = 'div'\nconst Component = MyComponent\n---\n\n<Element>Hello!</Element>\n<!-- renders as <div>Hello!</div> -->\n<Component />\n<!-- renders as <MyComponent /> -->\n```\n\nWhen using dynamic tags:\n\n- **Variable names must be capitalized.** For example, use `Element`, not `element`. Otherwise, Astro will try to render your variable name as a literal HTML tag.\n- **Hydration directives are not supported.** When using [`client:*` hydration directives](/en/core-concepts/framework-components/#hydrating-interactive-components), Astro needs to know which components to bundle for production, and the dynamic tag pattern prevents this from working.\n\n### Fragments\n\nAstro supports using either `<Fragment> </Fragment>` or the shorthand `<> </>`.\n\nFragments can be useful to avoid wrapper elements when adding [`set:*` directives](/en/reference/directives-reference/#sethtml), as in the following example:\n\n```astro\n---\nconst htmlString = '<p>Raw HTML content</p>'\n---\n\n<Fragment set:html={htmlString} />\n```\n\n### Differences between Astro and JSX\n\nAstro component syntax is a superset of HTML. It was designed to feel familiar to anyone with HTML or JSX experience, but there are a couple of key differences between `.astro` files and JSX.\n\n#### Attributes\n\nIn Astro, you use the standard `kebab-case` format for all HTML attributes instead of the `camelCase` used in JSX. This even works for `class`, which is not supported by React.\n\n```jsx\n<div className=\"box\" dataValue=\"3\" />\n<div class=\"box\" data-value=\"3\" />\n```\n\n#### Multiple Elements\n\nAn Astro component template can render multiple elements with no need to wrap everything in a single `<div>` or `<>`, unlike JavaScript or JSX.\n\n```astro\n---\n// Template with multiple elements\n---\n\n<p>No need to wrap elements in a single containing element.</p>\n<p>Astro supports multiple root elements in a template.</p>\n```\n\n#### Comments\n\nIn Astro, you can use standard HTML comments or JavaScript-style comments.\n\n```astro\n---\n\n---\n\n<!-- HTML comment syntax is valid in .astro files -->{/* JS comment syntax is also valid */}\n```\n\nHTML-style comments will be included in browser DOM, while JS ones will be skipped. To leave TODO messages or other development-only explanations, you may wish to use JavaScript-style comments instead.\n";
						const data = {title:"MacBook Pro 2022",description:"The new MacBook Pro 2022 is here. With the Apple M2 chip, a new design, and more, the new MacBook Pro is the best laptop Apple has ever made.",pubDate:new Date(1656712800000),heroImage:
						new Proxy({"src":"/_astro/bg.BLmUMqKA.jpg","width":2400,"height":1920,"format":"jpg","fsPath":"/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/assets/images/bg.jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/assets/images/bg.jpg";
							}
							
							return target[name];
						}
					})
					,category:"Astrophotography",tags:["JavaScript","css","HTML5","GitHub"],draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/blog/copy-page-2.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
