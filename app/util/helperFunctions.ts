// IMPORTS
import type { LinkField } from "@prismicio/client";

// HELPER FUNCTIONS
export const getUrl = (link: LinkField) => {
    if(link.link_type === 'Web') return link.url;
    if(link.link_type === 'Media') return link.url;
    if(link.link_type === 'Document') return `/${link.type === "plain_text" ? link.uid : link.slug}`;
};