import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { UseAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";


export const Login: VFC = memo(() => {
    const [userId, setUserId] = useState('')

    const { login, loading } = UseAuth();

    const onClickLogin = () => login(userId);

    const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    return (
        <Flex align='center' justify='center' height='100vh' >
            <Box bg='white' p={4} w='sm' borderRadius='md' shadow='md' >
                <Heading as='h1' textAlign='center' >ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10} >
                    <Input placeholder='ユーザーID' value={userId} onChange={onChangeUserID} />
                    <PrimaryButton disabled={userId.replace(/\s+/g, "") === ''} onClick={onClickLogin} loading={loading} >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})