interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Little Squatch aka Christopher G', // Site author
	title: 'Little Squatch Shots', // Site title.
	description: 'My personal blog showing off a little bit of my creative side', // Description to display in the meta tags
	lang: 'en-US',
	ogLocale: 'US',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
