"use client";

import {
	Box,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Grid,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const ActiveLink = ({ menu }: { menu: string }) => {
	return (
		<Text
			color="white"
			py="4px"
			px="16px"
			backgroundColor="primary.100"
			borderRadius="2xl"
		>
			{menu}
		</Text>
	);
};

function Navbar() {
	const pathName = usePathname();

	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				as="header"
				position="fixed"
				w="100%"
				backgroundColor="rgba(255, 255, 255, 0.8)"
				backdropFilter="saturate(180%) blur(5px)"
				shadow={"sm"}
				zIndex={100}
			>
				<Flex
					justifyContent="space-between"
					alignItems={"center"}
					px={{ base: 16, md: 36 }}
					py={6}
					display={["none", "none", "flex", "flex"]}
				>
					<Box display={["none", "none", "block", "block"]}>
						<Link href={"/"}>
							<Image
								src="/snaps_logo.png"
								alt="Logo snaps"
								width="150"
								height="150"
							/>
						</Link>
					</Box>
					<Flex gap={8} display={["none", "none", "flex", "flex"]}>
						<Link href={"/"}>
							{pathName === "/" || pathName.includes("blog") ? (
								<ActiveLink menu="Blog" />
							) : (
								<Text
									py={"4px"}
									color={"gray.600"}
									_hover={{ color: "gray.800" }}
								>
									Blog
								</Text>
							)}
						</Link>
						<Link href={"/user"}>
							{pathName === "/user" || pathName.includes("user") ? (
								<ActiveLink menu="User" />
							) : (
								<Text
									py={"4px"}
									color={"gray.600"}
									_hover={{ color: "gray.800" }}
								>
									User
								</Text>
							)}
						</Link>
					</Flex>
				</Flex>
				{/* mobile nav */}
				<Grid
					display={["grid", "grid", "none", "none"]}
					gridTemplateColumns={"auto 1fr"}
					placeItems={"center"}
					px={{ base: 16, md: 36 }}
					py={6}
				>
					<HamburgerIcon width="24px" height="24px" onClick={onOpen} />
					<Image
						src="/snaps_logo.png"
						alt="Logo snaps"
						width="150"
						height="150"
					/>
				</Grid>
			</Box>
			<Drawer isOpen={isOpen} onClose={onClose} placement="left">
				<DrawerOverlay />
				<DrawerContent bgColor="primary.50">
					<DrawerHeader>
						<Link href={"/"} onClick={onClose}>
							<Image
								src="/snaps_logo.png"
								alt="Logo snaps"
								width="150"
								height="150"
							/>
						</Link>
						<DrawerCloseButton />
					</DrawerHeader>
					<Stack px={6} py={4} gap={4}>
						<Link href="/" onClick={onClose}>
							<Text fontSize={"lg"}>Blog</Text>
						</Link>
						<Link href="/user" onClick={onClose}>
							<Text fontSize={"lg"}>User</Text>
						</Link>
					</Stack>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Navbar;
