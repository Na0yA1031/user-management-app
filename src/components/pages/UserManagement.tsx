import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/userCard";


export const UserManagement: VFC = memo(() => {
    const { getUsers, users, loading } = useAllUsers();

    useEffect(() => getUsers(), [])

    return (
        <>
            {loading ? (
                <Center height='100vh'>
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} justify='center' >
                    {users?.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard
                                imageUrl='https://source.unsplash.com/random'
                                userName={user.username}
                                fullName={user.name}
                            />
                        </WrapItem>
                    ))}
                </Wrap>

            )}
        </>
    )
})