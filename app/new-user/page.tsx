"use client";

import {
	Box,
	Button,
	Card,
	CardBody,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Stack,
	useToast,
	Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";
import { AddUserProps } from "../types/Users";
import { useMutation } from "react-query";
import { addUser } from "../api/User/addUser";
import { CheckCircleIcon } from "@chakra-ui/icons";

function Page() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<AddUserProps>();

	const toast = useToast();

	const mutation = useMutation({
		mutationFn: addUser,
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
							<Text>Data successfully added</Text>
						</Flex>
					</Box>
				),
			});
		},
	});

	const onSubmit: SubmitHandler<AddUserProps> = (data) => {
		mutation.mutate(data);
		reset();
	};

	return (
		<Center>
			<Card
				borderRadius={"24px"}
				width={{ base: "100%", lg: "80%" }}
				shadow={"lg"}
			>
				<CardBody>
					<form>
						<FormControl>
							<Stack gap={6}>
								<Box>
									<FormLabel>Name</FormLabel>
									<Input
										id="name"
										type="text"
										placeholder="Enter name"
										borderColor="gray.400"
										_hover={{
											borderColor: "primary.100",
										}}
										{...register("name", {
											required: "Please fill in this field",
										})}
									/>
									{errors.name && (
										<Text color="red" mt={2}>
											{errors.name.message}
										</Text>
									)}
								</Box>
								<Box>
									<FormLabel>Email</FormLabel>
									<Input
										id="email"
										type="text"
										placeholder="Enter email"
										borderColor="gray.400"
										_hover={{
											borderColor: "primary.100",
										}}
										{...register("email", {
											required: "Please fill in this field",
										})}
									/>
									{errors.name && (
										<Text color="red" mt={2}>
											{errors.name.message}
										</Text>
									)}
								</Box>
								<Box>
									<FormLabel>Gender</FormLabel>
									<Select
										placeholder="Select gender"
										borderColor="gray.400"
										_hover={{
											borderColor: "primary.100",
										}}
										{...register("gender", {
											required: "Please fill in this field",
										})}
									>
										<option value="female">Female</option>
										<option value="male">Male</option>
									</Select>
									{errors.name && (
										<Text color="red" mt={2}>
											{errors.name.message}
										</Text>
									)}
								</Box>
								<Box>
									<FormLabel>Status</FormLabel>
									<Select
										placeholder="Select status"
										borderColor="gray.400"
										_hover={{
											borderColor: "primary.100",
										}}
										{...register("status", {
											required: "Please fill in this field",
										})}
									>
										<option value="active">Active</option>
										<option value="inactive">Inactive</option>
									</Select>
									{errors.name && (
										<Text color="red" mt={2}>
											{errors.name.message}
										</Text>
									)}
								</Box>
								<Flex justifyContent={"flex-end"}>
									<Button
										bgColor="primary.100"
										color="white"
										shadow="lg"
										_hover={{
											bgColor: "white",
											color: "primary.100",
										}}
										isLoading={isSubmitting}
										type="submit"
										onClick={handleSubmit(onSubmit)}
									>
										Submit
									</Button>
								</Flex>
							</Stack>
						</FormControl>
					</form>
				</CardBody>
			</Card>
		</Center>
	);
}

export default Page;
