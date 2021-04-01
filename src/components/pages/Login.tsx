import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";


export const Login: VFC = memo(() => {
    return (
        <Flex align='center' justify='center' height='100vh' >
            <Box bg='white' p={4} w='sm' borderRadius='md' shadow='md' >
                <Heading as='h1' textAlign='center' >ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10} >
                    <Input placeholder='ユーザーID' />
                    <PrimaryButton>ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})