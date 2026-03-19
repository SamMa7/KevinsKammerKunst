// IMPORTS
import type { LinkField } from "@prismicio/client";

// HELPER FUNCTIONS
export const getUrl = (link: LinkField) => {
    if(link.link_type === 'Document') return `/${link.slug}`;
    if(link.link_type === 'Web') return link.url;
};