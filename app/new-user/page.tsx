"use client";

import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Select,
	Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";
import { AddUserProps } from "../types/Users";

function Page() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<AddUserProps>();

	return (
		<Card borderRadius={"24px"} width={"100%"} shadow={"lg"}>
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
								>
									Submit
								</Button>
							</Flex>
						</Stack>
					</FormControl>
				</form>
			</CardBody>
		</Card>
	);
}

export default Page;
