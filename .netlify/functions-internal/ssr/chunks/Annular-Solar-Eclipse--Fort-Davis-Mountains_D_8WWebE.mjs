import { _ as __astro_tag_component__, j as Fragment, x as createVNode } from './astro_CsVxrLK6.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './pages/__By1NXklS.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/placeholder-social.jpg",
  "category": "Astrophotography",
  "description": "Annular solar eclipse and camping trip to Fort Davis Mountains",
  "pubDate": "2023-10-28T05:00:00.000Z",
  "tags": ["outdoors", "road trip", "state parks", "stars", "camping", "solar photography", "solar eclipse", "astrophotography"],
  "title": "Annular Solar Eclipse & Fort Davis Mountains",
  "minutesRead": "0 min read"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/2023/Annular-Solar-Eclipse--Fort-Davis-Mountains.mdx";
const file = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/blog/2023/Annular-Solar-Eclipse--Fort-Davis-Mountains.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/cgarza/GitHub-Repos/little-squatch-blog-prod/src/content/blog/2023/Annular-Solar-Eclipse--Fort-Davis-Mountains.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
