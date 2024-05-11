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
	Spinner,
	Center,
	Text,
	useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditUserProps, UsersProps } from "../../types/Users";
import { useMutation, useQuery } from "react-query";
import { getDetailUser } from "../../api/User/getDetailUser";
import { editUser } from "../../api/User/editUser";
import { CheckCircleIcon } from "@chakra-ui/icons";

function Page({ params }: { params: { id: string } }) {
	const toast = useToast();
	const [isEdit, setIsEdit] = useState(false);

	const { data: detailUser, isLoading } = useQuery({
		queryKey: ["GetDetailUser", params.id],
		queryFn: () => getDetailUser(Number(params.id)),
	});

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		setValue,
	} = useForm<UsersProps>();

	const mutation = useMutation({
		mutationFn: editUser,
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
							<Text>Data successfully updated</Text>
						</Flex>
					</Box>
				),
			});
		},
	});

	const onSubmit: SubmitHandler<UsersProps> = (data) => {
		mutation.mutate(data);
		setIsEdit(false);
	};

	const handleClickEdit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setIsEdit(true);
	};

	useEffect(() => {
		if (detailUser) {
			setValue("id", detailUser.id);
			setValue("name", detailUser?.name);
			setValue("email", detailUser?.email);
			setValue("gender", detailUser.gender);
			setValue("status", detailUser.status);
		}
	}, [detailUser, setValue]);

	return (
		<>
			{isLoading ? (
				<Flex justifyContent={"center"} alignItems={"center"}>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Flex>
			) : (
				<Center>
					<Card
						borderRadius={"24px"}
						width={{ base: "100%", lg: "80%" }}
						shadow={"lg"}
					>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormControl>
									<Stack gap={6}>
										<Flex justifyContent="space-between" alignItems="center">
											<Heading fontSize={"2xl"} color="primary.100">
												User Profile
											</Heading>
											{isEdit ? (
												<Button
													variant="outline"
													borderColor="primary.100"
													bgColor="transparent"
													color="primary.100"
													_hover={{
														bgColor: "transparent",
														borderColor: "primary.100",
														color: "primary.100",
													}}
													type="submit"
												>
													Save
												</Button>
											) : (
												<Button
													variant={"filled"}
													borderColor={"transparent"}
													bgColor={"primary.100"}
													color={"white"}
													_hover={{
														bgColor: "transparent",
														borderColor: "primary.100",
														color: "primary.100",
													}}
													type="button"
													onClick={(e) => handleClickEdit(e)}
												>
													Edit
												</Button>
											)}
										</Flex>
										<Box>
											<Input id="id" type="hidden" {...register("id")} />
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
				</Center>
			)}
		</>
	);
}

export default Page;
