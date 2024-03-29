import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, ReactNode, VFC } from "react";

type Props = {
    imageUrl: string;
    userName: string;
    fullName: string;
}

export const UserCard: VFC<Props> = memo((props) => {
    const { imageUrl, userName, fullName } = props;
    return (
        <Box w='260px'
            h='260px'
            bg='white'
            borderRadius='10px'
            shadow='md'
            p={4}
            _hover={{ cursor: 'pointer', opacity: '.8' }}
        >
            <Stack textAlign='center' >
                <Image
                    boxSize='160px'
                    src={imageUrl}
                    borderRadius='full'
                    alt={userName}
                    m='auto'
                />
                <Text fontSize='lg' fontWeight='bold' >{userName}</Text>
                <Text fontSize='sm' color='gray' >{fullName}</Text>
            </Stack>
        </Box>
    )
})