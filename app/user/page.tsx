"use client";

import React from "react";
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

function Page() {
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
			<UserList />;
		</Stack>
	);
}

export default Page;
