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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
	useToast,
	Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getUsers } from "../../api/User/getUserList";
import { useMutation, useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faEye,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { UsersProps } from "../../types/Users";
import { deleteUser } from "../../api/User/deleteUser";
import { CheckCircleIcon } from "@chakra-ui/icons";
import UserListSkeleton from "./UserListSkeleton";

function UserList({ currentPage }: { currentPage: number }) {
	const route = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const {
		data: users,
		refetch,
		isLoading,
	} = useQuery({
		queryKey: ["GetUsers", currentPage, 20],
		queryFn: () => getUsers(currentPage, 20),
	});

	const [selectedUser, setSelectedUser] = useState<UsersProps>();

	const mutation = useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			toast({
				position: "top-right",
				duration: 3000,
				render: () => (
					<Box
						bgColor={"blue.400"}
						color={"white"}
						py={2}
						px={4}
						rounded={"lg"}
					>
						<Flex gap={4} alignItems="center">
							<CheckCircleIcon />
							<Text>Data successfully deleted</Text>
						</Flex>
					</Box>
				),
			});
			refetch();
		},
	});

	const handleDelete = () => {
		if (selectedUser?.id !== undefined) {
			mutation.mutate(selectedUser.id);
			onClose();
		}
	};

	return (
		<>
			{isLoading ? (
				<UserListSkeleton />
			) : (
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
									<Td textAlign="center">
										{index + 1 + (currentPage - 1) * 20}
									</Td>
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
														onClick={() => {
															setSelectedUser(user);
															onOpen();
														}}
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
			)}
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete User</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Are you sore you want to delete{" "}
							<span style={{ fontWeight: 700 }}>{selectedUser?.name}</span>?
							This action cannot be undone.
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							variant={"outline"}
							borderColor={"primary.100"}
							onClick={onClose}
							mr={4}
							_hover={{
								bgColor: "red",
								color: "white",
								borderColor: "red",
							}}
						>
							Cancel
						</Button>
						<Button
							bgColor={"primary.100"}
							color="white"
							type="submit"
							_hover={{
								bgColor: "transparent",
								color: "gray.800",
							}}
							onClick={handleDelete}
						>
							Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default UserList;
