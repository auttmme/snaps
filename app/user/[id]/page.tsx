"use client";

import {
	Box,
	Card,
	CardBody,
	FormControl,
	Stack,
	FormLabel,
	Input,
	Select,
	Flex,
	Button,
	Heading,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UsersProps } from "../../types/Users";
import { useQuery } from "react-query";
import { getDetailUser } from "../../api/User/getDetailUser";

function Page({ params }: { params: { id: string } }) {
	const [isEdit, setIsEdit] = useState(false);

	const { data: detailUser } = useQuery({
		queryKey: ["GetDetailUser", params.id],
		queryFn: () => getDetailUser(Number(params.id)),
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("");
	const [status, setStatus] = useState("");

	useEffect(() => {
		if (detailUser) {
			setName(detailUser.name);
			setEmail(detailUser.email);
			setGender(detailUser.gender);
			setStatus(detailUser.status);
		}
	}, [detailUser]);

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<UsersProps>();

	return (
		<Card borderRadius={"24px"} width={"100%"} shadow={"lg"}>
			<CardBody>
				<form>
					<FormControl>
						<Stack gap={6}>
							<Flex justifyContent="space-between" alignItems="center">
								<Heading fontSize={"2xl"} color="primary.100">
									User Profile
								</Heading>
								<Button
									variant={isEdit ? "outline" : "filled"}
									borderColor={isEdit ? "primary.100" : "transparent"}
									bgColor={isEdit ? "transparent" : "primary.100"}
									color={isEdit ? "primary.100" : "white"}
									_hover={{
										bgColor: "transparent",
										borderColor: "primary.100",
										color: "primary.100",
									}}
									onClick={() => setIsEdit(!isEdit)}
								>
									{isEdit ? "Save" : "Edit"}
								</Button>
							</Flex>
							<Box>
								<FormLabel>Name</FormLabel>
								<Input
									id="name"
									type="text"
									placeholder="Enter name"
									borderColor="gray.200"
									_hover={{
										borderColor: "primary.100",
									}}
									readOnly={!isEdit}
									{...register("name", {
										required: "Please fill in this field",
									})}
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Box>
							<Box>
								<FormLabel>Email</FormLabel>
								<Input
									id="email"
									type="text"
									placeholder="Enter email"
									borderColor="gray.200"
									_hover={{
										borderColor: "primary.100",
									}}
									readOnly={!isEdit}
									{...register("email", {
										required: "Please fill in this field",
									})}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Box>
							<Box>
								<FormLabel>Gender</FormLabel>
								<Select
									placeholder="Select gender"
									borderColor="gray.200"
									_hover={{
										borderColor: "primary.100",
									}}
									isDisabled={!isEdit}
									{...register("gender", {
										required: "Please fill in this field",
									})}
									value={gender}
									onChange={(e) => setGender(e.target.value)}
								>
									<option key="female" value="female">
										Female
									</option>
									<option key="male" value="male">
										Male
									</option>
								</Select>
							</Box>
							<Box>
								<FormLabel>Status</FormLabel>
								<Select
									placeholder="Select status"
									borderColor="gray.200"
									_hover={{
										borderColor: "primary.100",
									}}
									isDisabled={!isEdit}
									{...register("status", {
										required: "Please fill in this field",
									})}
									value={status}
									onChange={(e) => setStatus(e.target.value)}
								>
									<option key="active" value="active">
										Active
									</option>
									<option key="inactive" value="inactive">
										Inactive
									</option>
								</Select>
							</Box>
						</Stack>
					</FormControl>
				</form>
			</CardBody>
		</Card>
	);
}

export default Page;
