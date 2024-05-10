"use client";

import React, { useCallback, useState } from "react";
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

function Page() {
	const [currentPage, setCurrentPage] = useState(1);

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
						placeholder="Seacrh user"
						width={"30%"}
						variant="filled"
						bgColor={"white"}
						shadow={"lg"}
						_hover={{ bgColor: "transparent" }}
					/>
				</InputGroup>
				<Link href={"/new-user"}>
					<Button
						bgColor="primary.100"
						color="white"
						shadow="lg"
						_hover={{ bgColor: "white", color: "primary.100", shadow: "lg" }}
					>
						Add User
					</Button>
				</Link>
			</Flex>
			<UserList currentPage={currentPage} />;
			<UserPagination
				currentPage={currentPage}
				handleClickPage={handleClickPage}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
			/>
		</Stack>
	);
}

export default Page;
