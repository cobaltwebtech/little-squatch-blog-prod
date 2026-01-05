import { fromMarkdown } from "mdast-util-from-markdown";
import { toString as mdastToString } from "mdast-util-to-string";
import calculateReadingTime from "reading-time";

export const getReadingTime = (text: string): string | undefined => {
	if (!text || !text.length) return undefined;
	try {
		const { minutes } = calculateReadingTime(mdastToString(fromMarkdown(text)));
		if (minutes && minutes > 0) {
			return `${Math.ceil(minutes)} min read`;
		}
		return undefined;
	} catch (_) {
		return undefined;
	}
};
