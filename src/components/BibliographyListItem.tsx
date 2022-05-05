import { Box, Icon, ListIcon, ListItem } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { GiOpenBook } from "react-icons/gi";

interface BiblioListItemProps{
    title: string;
    url: string;
}
export default function BibliographyListItem({title, url}: BiblioListItemProps){
    return(
        <ListItem>
            <ListIcon as={GiOpenBook} color="green.400" />
            <a target="_blank" href={url}>
                <Box as="span">{title}</Box>
                <Box as="span" pl={1}>
                    <Icon as={BiLinkExternal} />
                </Box>
            </a>
        </ListItem>
    );
}