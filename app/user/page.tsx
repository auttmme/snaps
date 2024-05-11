"use client";

import React, { useCallback, useContext, useState } from "react";
import UserList from "../components/User/UserList";
import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Link from "next/link";
import UserPagination from "../components/User/UserPagination";

import { UsersProps } from "../types/Users";
import { UserListContext } from "../UserListContext";

function Page() {
	const users = useContext(UserListContext);

	const [currentPage, setCurrentPage] = useState(1);
	const [searchUser, setSearchUser] = useState("");
	const [searchResult, setSearchResult] = useState<UsersProps[]>([]);
	let searchTimeout: NodeJS.Timeout;

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchUser(e.target.value);

		clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			const result = users?.filter((user) =>
				user.name.toLocaleLowerCase().includes(searchUser)
			);
			if (result) {
				setSearchResult(result);
			}
		}, 300);
	};

	const handleNextPage = useCallback(() => {
		if (currentPage === 5) {
			return;
		}
		setCurrentPage((a) => a + 1);
	}, [currentPage]);

	const handlePrevPage = useCallback(() => {
		if (currentPage === 1) {
			return;
		}
		setCurrentPage((a) => a - 1);
	}, [currentPage]);

	const handleClickPage = useCallback((page?: number) => {
		if (page) {
			setCurrentPage(page ?? 1);
		}
	}, []);

	return (
		<Stack gap={8}>
			<Flex justifyContent="space-between">
				<InputGroup>
					<InputLeftElement>
						<SearchIcon />
					</InputLeftElement>
					<Input
						placeholder="Search user"
						width={{ base: "100%", md: "50%", lg: "30%" }}
						variant="filled"
						bgColor={"white"}
						shadow={"lg"}
						_hover={{ bgColor: "transparent" }}
						onChange={(e) => handleSearch(e)}
					/>
				</InputGroup>
				<Link href={"/new-user"}>
					<Button
						display={{ base: "none", md: "flex" }}
						bgColor="primary.100"
						color="white"
						shadow="lg"
						_hover={{ bgColor: "white", color: "primary.100", shadow: "lg" }}
					>
						Add User
					</Button>
				</Link>
			</Flex>
			<UserList
				searchUser={searchUser}
				searchResult={searchResult}
				currentPage={currentPage}
			/>
			;
			{searchUser.length < 1 && (
				<UserPagination
					currentPage={currentPage}
					handleClickPage={handleClickPage}
					handleNextPage={handleNextPage}
					handlePrevPage={handlePrevPage}
				/>
			)}
		</Stack>
	);
}

export default Page;
