"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
	return (
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
				justifyContent={"space-between"}
				alignItems={"center"}
				px={36}
				py={6}
			>
				<Link href={"/"}>
					<Image
						src="/snaps_logo.png"
						alt="Logo snaps"
						width="150"
						height="150"
					/>
				</Link>
				<Flex gap={8}>
					<Link href={"/"}>
						{pathName === "/" ? (
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
						{pathName === "/user" ? (
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
		</Box>
	);
}

export default Navbar;
