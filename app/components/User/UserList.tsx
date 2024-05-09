"use client";

import {
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
	Stack,
	Box,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { getUsers } from "../../api/User/getUserList";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faEye,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { color } from "framer-motion";
import { useRouter } from "next/navigation";

function UserList() {
	const route = useRouter();

	const { data: users } = useQuery({
		queryKey: ["GetUsers", 1, 20],
		queryFn: () => getUsers(1, 20),
	});

	return (
		<TableContainer
			backgroundColor="white"
			borderRadius="24px"
			boxShadow={"lg"}
		>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th textAlign="center">No.</Th>
						<Th textAlign="center">Name</Th>
						<Th textAlign="center">Email</Th>
						<Th textAlign="center">Gender</Th>
						<Th textAlign="center">Status</Th>
						<Th textAlign="center">Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{users?.map((user, index) => (
						<Tr key={user.id}>
							<Td textAlign="center">{index + 1}</Td>
							<Td textAlign="center">{user.name}</Td>
							<Td textAlign="center">{user.email}</Td>
							<Td textAlign="center">
								<Box
									bgColor={user.gender === "male" ? "#ADD8E6" : "pink"}
									p={1}
									height="auto"
									rounded="24px"
								>
									<Text>{user.gender}</Text>
								</Box>
							</Td>
							<Td
								textAlign="center"
								color={user.status === "active" ? "green" : "red"}
							>
								{user.status}
							</Td>
							<Td textAlign="center">
								<Menu>
									<MenuButton
										as={IconButton}
										aria-label="Options"
										icon={
											<FontAwesomeIcon
												icon={faEllipsisVertical}
												color="#1A202C"
											/>
										}
										variant="ghost"
										isRound
									/>
									<MenuList rounded="12px" minW={"0"} width="160px">
										<Stack gap="2">
											<MenuItem
												icon={
													<FontAwesomeIcon
														icon={faEye}
														color="black"
														width="24px"
														height="24px"
													/>
												}
												onClick={() => route.push(`/user/${user.id}`)}
											>
												View
											</MenuItem>
											<MenuItem
												icon={
													<FontAwesomeIcon
														icon={faTrashCan}
														color="black"
														width="24px"
														height="24px"
													/>
												}
											>
												Delete
											</MenuItem>
										</Stack>
									</MenuList>
								</Menu>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default UserList;
